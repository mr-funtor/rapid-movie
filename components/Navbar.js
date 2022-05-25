import Link from 'next/link';
import styles from '../styles/Navbar.module.css';


function Navbar(){
    
    return(
    <nav className={styles.navbar}>
        
            <Link href="/">
                <i>OO</i>
            </Link>
            
        <i>XX</i>
        
    </nav>
    
    )
}

export default Navbar;