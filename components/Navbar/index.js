import Link from 'next/link';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse
} from "@fortawesome/free-solid-svg-icons";

function Navbar(){
    
    return(
    <nav className={styles.navbar}>
        
            <Link href="/">
                <i>
                    <FontAwesomeIcon
        icon={faHouse}/>
                </i>
            </Link>
            
        <i>XX</i>
        
        <div>
            <Link href="/all-movies">
                <p>Movies</p>
            </Link>
        </div>
    </nav>
    
    )
}

export default Navbar;