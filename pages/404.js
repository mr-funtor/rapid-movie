import Link from 'next/link';
import styles from '../styles/FourPage.module.css';

function theFour(){
    return(
    <main className={styles.container}>
        <h1>Oops... seems you have left the cinema</h1>
        <Link href="/">
            <a>Back Home</a>
        </Link>
    </main>
    )
}

export default theFour;