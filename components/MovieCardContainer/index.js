import Link from 'next/link';
import styles from './MovieCardContainer.module.css';
import MovieCard from '../MovieCard';
import useSWR from 'swr'


function MovieCardContainer({url}){
    const { data, error } = useSWR(url);
    
    if(!data)return
    
    const {Search}=data || [];
//    console.log(Search[0].Poster)
    
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


