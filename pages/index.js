import Head from 'next/head'
import {useState,useEffect} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
    faCaretRight
} from "@fortawesome/free-solid-svg-icons";
import tempBlood from '../assets/images/blood.jpg'
import MovieCardContainer from '../components/MovieCardContainer';
import Loader from '../components/LoadingModal';
import useSWR from 'swr'

export default function Home() {
    const [url, setUrl]=useState('/api/movies/all?movie=cat&page=1')
    const router=useRouter();
    const { data, error } = useSWR(`/api/movie/tt4154796`);
    
    if(!data)return <Loader />
    
    const {Poster, Title, Plot,imdbID,imdbRating}=data;
    
    const switchToSingleMovie=(e)=>{
        router.push(`/all-movies/${imdbID}`)
    }
    
  return (
    <section  className={styles.heroSection}>
      
      
      <div  className={styles.imageContainer}>
        <Image className={styles.theImage}   src={Poster} alt="a picture for the movie" layout="fill"/>
      </div>
      
      <section  className={styles.heroCover}>
            <div className={styles.coverTop}>
                <h1>{Title.toUpperCase()}</h1>
                <div className={styles.coverTopMid}>
                    <i>
                    
                            <FontAwesomeIcon className={`${imdbRating/2>=1 ? styles.active : ''}`} icon={faStar}/>
                            <FontAwesomeIcon className={`${imdbRating/2>=2 ? styles.active : ''}`} icon={faStar}/>
                            <FontAwesomeIcon className={`${imdbRating/2>=3 ? styles.active : ''}`} icon={faStar}/>
                            <FontAwesomeIcon className={`${imdbRating/2>=4 ? styles.active : ''}`} icon={faStar}/>
                            <FontAwesomeIcon className={`${imdbRating/2>=5 ? styles.active : ''}`} icon={faStar}/>
                
                    </i>
                    <p><span>{imdbRating}</span>/10</p>
                    <p>IMDB</p>
                </div>

                <button onClick={()=>switchToSingleMovie()}>View Details <i>
            <FontAwesomeIcon icon={faCaretRight} />
      </i></button>

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

