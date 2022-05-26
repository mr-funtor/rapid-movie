import {useState,useEffect} from 'react'
import {useRouter} from 'next/router';
import Image from 'next/image';
import tempBlood from '../../assets/images/blood.jpg';
import styles from '../../styles/SingleMovie.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";
import useSWR from 'swr';
import Loader from '../../components/LoadingModal'

function Movie(){
    const router=useRouter();
    const movieCode= router.query.singleMovie;
    const { data, error } = useSWR(`/api/movie/${movieCode}`);
    
    
    if(!data)return <Loader />
        
    const {Poster, Title, Plot, Year,imdbRating}=data;
 
    
    return(
        <main>
            <section className={styles.topSection}>
                <div className={styles.imageContainer}>
                 <Image className={styles.theImage}  src={Poster} alt="a picture for the movie" layout="fill"/>
              </div>
        
                 <section className={styles.heroCover}>
                    
                </section>
        
        
            </section>
            
            <section className={styles.movieBody}>
                <div className={styles.movieBodyTop}>
                    <h1>{Title.toUpperCase()}</h1>
                    <div>
                        <i>
                            <FontAwesomeIcon className={`${imdbRating/2>=1 ? styles.active : ''}`} icon={faStar}/>
                            <FontAwesomeIcon className={`${imdbRating/2>=2 ? styles.active : ''}`} icon={faStar}/>
                            <FontAwesomeIcon className={`${imdbRating/2>=3 ? styles.active : ''}`} icon={faStar}/>
                            <FontAwesomeIcon className={`${imdbRating/2>=4 ? styles.active : ''}`} icon={faStar}/>
                            <FontAwesomeIcon className={`${imdbRating/2>=5 ? styles.active : ''}`} icon={faStar}/>
                            
                        </i>
                        
                        <p>{imdbRating}/10</p>
                        <p>{Year}</p>
                    </div>
                    
                    <section className={styles.synopsis}>
                        <h1>Synopsis</h1>
                    
                        <p>{Plot}</p>
                    </section>
                   
                </div>
            
            </section>
        
        </main>
    )
}

export default Movie;

