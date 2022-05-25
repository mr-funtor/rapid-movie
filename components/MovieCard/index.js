import Image from 'next/image';
import heroPic from '../../assets/images/oct.jpg';
import styles from './MovieCard.module.css';
import Link from 'next/link';
//import {useRef} from 'react';
import {useRouter} from 'next/router';

function recentCards(){
    const router =useRouter()
    
    //This takes the user to the page/route for the single movie
    const switchToSingleMovie=(e)=>{
        router.push("/all-movies/one-movie")
    }
    
    
    return(
        <article  className={styles.singleCard} onClick={(e)=>switchToSingleMovie(e)}>
            <div className={styles.imageContainer}>
                <Image className={styles.theImage} src={heroPic}
        alt="a picture for the movie" layout="fill"/>
            </div>
       
            <div className={styles.overlay}>
                <footer className={styles.overlayFooter}>
                    <p data-type="see">October 1</p>
                    <div>
                        <i>****</i>
                        <p>4.5</p>
                    </div>
                </footer>
            </div>
        </article>
    )
}

export default recentCards;