import {useState} from 'react';
import styles from '../../styles/AllMovies.module.css';
import MovieCardContainer from '../../components/MovieCardContainer';

function allMoviesPage(){
      const [url, setUrl]=useState('/api/movies/single?movie=faith&page=1')
    
    return(
        <section className={styles.pageContainer}>
        
            <section id={styles.pageSection}>
                <h1>All Movies</h1>
                
                <MovieCardContainer url={url}/>

                <div className={styles.buttonContainer}>
                    <button>Load More</button>
                </div>
        
            </section>
        
        </section>
    
    )
}

export default allMoviesPage;

