import {useState} from 'react'
import {useRouter} from 'next/router';
import Image from 'next/image';
import tempBlood from '../../assets/images/blood.jpg';
import styles from '../../styles/SingleMovie.module.css';
import useSWR from 'swr'

function Movie(){
    const router=useRouter();
    const movieCode= router.query.singleMovie;
//    const [url, setUrl]=useState('/api/movies/single?movie=cat&page=1')
    const { data, error } = useSWR(`/api/movie/${movieCode}`);
    
    if(!data)return
        
    const {Poster, Title, Plot}=data;
   
    
    return(
        <main>
            <section className={styles.topSection}>
                <div className={styles.imageContainer}>
                 <Image className={styles.theImage}  src={Poster} alt="a picture for the movie" layout="fill"/>
              </div>
        
                 <section className={styles.heroCover}>
                    <h1>* * * * </h1>
                </section>
        
        
            </section>
            
            <section className={styles.movieBody}>
                <div className={styles.movieBodyTop}>
                    <h1>{Title.toUpperCase()}</h1>
        
                    
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

export async function getServerSideProps(context){
    const {params, query}= context;
    const {singleMovie}=params;
//    const response= await fetch(
//    `http://localhost:4000/news?category=${category}`
//    )
//    const data= await response.json();
    
    return{
        props:{
            
        }
    }
}
