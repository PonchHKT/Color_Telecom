import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
    return (
        <header className={styles.navContainer}>
            <div className={styles.navItems}>

                <div>
                <img style={{width: '100%'}} src="https://www.standardenligne.fr/wp-content/uploads/2021/05/Logo-Standard-en-ligne_vpng.png" alt="logo" />
                </div>

                <ul>
                    <li><Link href="/">Acceuil</Link></li>
                    <li><Link href="/login">Authentification</Link></li>
                </ul>

            </div>

        </header>
    )
}

export default Navbar;