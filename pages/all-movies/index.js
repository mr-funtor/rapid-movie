import styles from '../../styles/AllMovies.module.css';
import MovieCardContainer from '../../components/MovieCardContainer';

function allMoviesPage(){
      
    
    return(
        <section className={styles.pageContainer}>
        
            <section id={styles.pageSection}>
                <h1>All Movies</h1>
                
                <MovieCardContainer />

                <div className={styles.buttonContainer}>
                    <button>Load More</button>
                </div>
        
            </section>
        
        </section>
    
    )
}

export default allMoviesPage;

