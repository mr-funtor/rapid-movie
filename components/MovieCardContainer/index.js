import Link from 'next/link';
import styles from './MovieCardContainer.module.css';
import MovieCard from '../MovieCard';
import useSWR from 'swr'


function MovieCardContainer(){
    const { data, error } = useSWR('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1');
    
    console.log(data)
    
    return(
    <section className={styles.cardsContainer}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </section>
    
    )
}

export default MovieCardContainer;