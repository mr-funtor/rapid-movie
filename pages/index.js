import Head from 'next/head'
import {useState} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import tempBlood from '../assets/images/blood.jpg'
import MovieCardContainer from '../components/MovieCardContainer';
import useSWR from 'swr'

export default function Home() {
    const [url, setUrl]=useState('/api/movies/all?movie=cat&page=1')
    
    const router=useRouter();
//    const [url, setUrl]=useState('/api/movies/single?movie=cat&page=1')
    const { data, error } = useSWR(`/api/movie/tt4154796`);
    
    if(!data)return
    
    const {Poster, Title, Plot,imdbID}=data;
    
    const switchToSingleMovie=(e)=>{
        router.push(`/all-movies/${imdbID}`)
    }
    
  return (
    <section  className={styles.heroSection}>
      
      
      <div  className={styles.imageContainer}>
        <Image className={styles.theImage}   src={Poster} alt="a picture for the movie" layout="fill"/>
      </div>
      
      <section onClick={()=>switchToSingleMovie()} className={styles.heroCover}>
            <div className={styles.coverTop}>
                <h1>{Title.toUpperCase()}</h1>
                <div>
                    <i>*****</i>
                    <p><span>7.4</span>/10</p>
                    <p>IMDB</p>
                </div>
            </div>
      </section>
          
    <section className={styles.secondSection}>
      
        <section className={styles.recentContainer}>
            <div className={styles.recentHeader}>
                <h1>Other Movies</h1>
            </div>
            
             <MovieCardContainer url={url}/>
            
        </section>
      </section>
          
    </section>
  )
}

