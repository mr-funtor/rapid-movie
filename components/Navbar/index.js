import Link from 'next/link';
import styles from './Navbar.module.css';


function Navbar(){
    
    return(
    <nav className={styles.navbar}>
        
            <Link href="/">
                <i>OO</i>
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