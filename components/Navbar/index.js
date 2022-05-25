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
        <p>Movies</p>
        
        </div>
    </nav>
    
    )
}

export default Navbar;