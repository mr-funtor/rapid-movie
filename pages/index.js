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
import avengers from '../assets/images/avengers.jpg'
import MovieCardContainer from '../components/MovieCardContainer';
import Loader from '../components/LoadingModal';
import useSWR from 'swr'




export default function Home() {
    const [url, setUrl]=useState(`/api/movies/all?movie=${pickRandomTopic()}&page=1`)//this gets the data for the movies in the "some movies" area 
    const router=useRouter();
    const { data, error } = useSWR(`/api/movie/tt4154796`);//this gets the data for the hero section
    
    if(!data)return <Loader />
    
    const {Poster, Title, Plot,imdbID,imdbRating}=data;
    
    //this takes the user to the page that shows the details of a single movie
    const switchToSingleMovie=(e)=>{
        router.push(`/movies/${imdbID}`)
    }
    
    //this picks a random topic that would be passed to the query string to show different movies when the user gets to the home page
    function pickRandomTopic(){
        const words=['cash', 'grace', 'peace', 'dare', 'hell', 'angels', 'love', 'bet','cat'];
        const randomWord=words[Math.floor(Math.random()*words.length)];
        return randomWord;
    }
    
  return (
    <section  className={styles.heroSection}>
      
      
      <div  className={styles.imageContainer}>
        <Image className={styles.theImage}   src={avengers} alt="a picture for the movie" layout="fill"/>
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

