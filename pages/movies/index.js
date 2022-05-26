import {useState} from 'react';
import styles from '../../styles/AllMovies.module.css';
import MovieCardContainer from '../../components/MovieCardContainer';


function allMoviesPage(){
    //All These Track and limit the Movies That Are Displayed Like Pagination
    const [pageNumber, setPageNumber]=useState(1)
      const [urlFull, setUrlFull]=useState([
          {
        url:`/api/movies/single?movie=faith&page=${pageNumber}`
    }
      ])
    
      const addMoreMovies=(num)=>{
          
          setUrlFull([...urlFull,{
        url:`/api/movies/single?movie=father&page=${num+1}`
    }
                     ])
          setPageNumber(pageNumber+1);
      }
      
    return(
        <section className={styles.pageContainer}>
        
            <section id={styles.pageSection}>
                <h1>All Movies</h1>
                
            {
        
            urlFull.map((item, index)=>{
                return <MovieCardContainer url={item.url} key={index}/>
        })
        
            }
        
                <div className={styles.buttonContainer}>
                    <button onClick={()=>addMoreMovies(pageNumber)}>Load More</button>
                </div>
        
            </section>
        
        </section>
    
    )
}

export default allMoviesPage;

