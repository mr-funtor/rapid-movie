import Link from 'next/link';
import styles from './MovieCardContainer.module.css';
import MovieCard from '../MovieCard'


function MovieCardContainer(){
    
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