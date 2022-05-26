import {useState,useEffect} from 'react';
import Link from 'next/link';
import styles from './MovieCardContainer.module.css';
import MovieCard from '../MovieCard';
import useSWR from 'swr'
import Loader from '../LoadingModal';

function MovieCardContainer({url}){
    const { data, error } = useSWR(url);
    
    if(!data)return <Loader />
    
    const {Search}=data || [];
  
    return(
    <section className={styles.cardsContainer}>
     {
      Search && Search.map((movie)=>{
        const {Title,Year, Poster,imdbID}=movie;
        
        return(
            <MovieCard key={imdbID} Title={Title} Year={Year} Poster={Poster} imdbID={imdbID}/>
        )
    }) 
    
        } 
    
    
    </section>
    
    )
}

export default MovieCardContainer;


