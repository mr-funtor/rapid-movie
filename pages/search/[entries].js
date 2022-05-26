import {useState,useEffect} from 'react'
import {useRouter} from 'next/router';
import styles from '../../styles/SingleMovie.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";
import useSWR from 'swr';
import Loader from '../../components/LoadingModal'
import MovieCardContainer from '../../components/MovieCardContainer'

function SingleEntry(){
    const router=useRouter();
    const movieCode= router.query.movie;
//    console.log('inside entries', movieCode,router.query)
    const [url, setUrl]=useState()

    //renders the page when the user searches on the navbar
 useEffect(()=>{
     setUrl(`/api/movies/match?movie=${movieCode}&page=1`)
 },[movieCode])
    
    return(
        <section className={styles.pageContainer}>
        
            <section id={styles.pageSection}>
                <h1>Top Results</h1>
                
                <MovieCardContainer url={url}/>

        
        
            </section>
        
        </section>
    )
}

export default SingleEntry;

