import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import tempBlood from '../assets/images/blood.jpg'
import MovieCardContainer from '../components/MovieCardContainer'


export default function Home() {

  return (
    <section className={styles.heroSection}>
      
      
      <div className={styles.imageContainer}>
        <Image className={styles.theImage} placeholder="blur"  src={tempBlood} alt="a picture for the movie" layout="fill"/>
      </div>
      
      <section className={styles.heroCover}>
            <div className={styles.coverTop}>
                <h1>Blood Sisters</h1>
                <div>
                    <i>*****</i>
                    <p><span>7.4</span>/10</p>
                    <p>IMDB</p>
                </div>
            </div>
      </section>
          
    <section className={styles.secondSection}>
      
        <section className={styles.recentContainer}>
            <div className={styles.recentHeader}>
                <h1>Some Movies</h1>
            </div>
            
             <MovieCardContainer />
            
            
             
        </section>
      </section>
          
    </section>
  )
}

//<div className={styles.buttonContainer}>
//                <button>Load More</button>
//            </div>
