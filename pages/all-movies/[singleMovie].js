import {useRouter} from 'next/router';
import Image from 'next/image';
import tempBlood from '../../assets/images/blood.jpg';
import styles from '../../styles/SingleMovie.module.css';

function Movie(){
    const router=useRouter();
    const singleMovie= router.query.singleMovie;
    
    return(
        <main>
            <section className={styles.topSection}>
                <div className={styles.imageContainer}>
                 <Image className={styles.theImage} placeholder="blur"  src={tempBlood} alt="a picture for the movie" layout="fill"/>
              </div>
        
                 <section className={styles.heroCover}>
                    <h1>* * * * </h1>
                </section>
        
        
            </section>
            
            <section className={styles.movieBody}>
                <div className={styles.movieBodyTop}>
                    <h1>WEDDING PARTY</h1>
        
                    
                    <section className={styles.synopsis}>
                        <h1>Synopsis</h1>
                    
                        <p>jldjljsl ljdljls ljsljd
                        shhd ndiid sdksoj sjdkh shkdhsk shkdh sihksos skdkhs sndkhis dhshsa skhd skdhks shdid shdhiosn sikhdo</p>
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
