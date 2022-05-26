import Image from 'next/image';
import heroPic from '../../assets/images/oct.jpg';
import styles from './MovieCard.module.css';
import Link from 'next/link';
//import {useRef} from 'react';
import {useRouter} from 'next/router';

function MovieCard({Title,Year, Poster,imdbID}){
    const router =useRouter()
    
    //This takes the user to the page/route for the single movie
    const switchToSingleMovie=(e)=>{
        router.push(`/all-movies/${imdbID}`)
    }
    
    
    return(
        <article  className={styles.singleCard} onClick={(e)=>switchToSingleMovie(e)}>
            <div className={styles.imageContainer}>
                <Image className={styles.theImage} src={Poster}
        alt="a picture for the movie" layout="fill"/>
            </div>
       
            <div className={styles.overlay}>
                <footer className={styles.overlayFooter}>
                    <p data-type="see">{Title}</p>
                    
                    <button >View Details</button>
                    <div>
                       
                    </div>
                </footer>
            </div>
        </article>
    )
}

export default MovieCard;