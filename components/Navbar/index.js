import Link from 'next/link';
import {useState} from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse
} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from 'next/router';

function Navbar(){
    const router=useRouter();
    const [text, setText]=useState('');
    
    const movieSearch=(e)=>{   
        setText(e.target.value)
    }
    
    const triggerEvent=(e)=>{
       if(e.key==='Enter'){
//           router.reload();
           router.replace(`/search/match?movie=${text}&page=1`);
           
                          }
    }
    
    return(
    <nav className={styles.navbar}>
        
            <Link href="/">
                <i>
                    <FontAwesomeIcon
        icon={faHouse}/>
                </i>
            </Link>
            
        <input type="text" 
        placeholder="search for a movie" 
        value={text}
        onKeyPress={(e)=>triggerEvent(e)}
        onChange={(e)=>movieSearch(e)}
        />
       
        <div>
            <Link href="/movies">
                <p>Movies</p>
            </Link>
        </div>
    </nav>
    
    )
}

export default Navbar;