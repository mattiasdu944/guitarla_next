import styles from '../styles/Footer.module.css';
import { navLinks } from "../constants/constants";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer_container}`}>
        <Link href='/'>
          <>
            <Image width={200} height={150} src='/img/logo.svg'/>

          </>
        </Link>
        <nav>
          <ul className={styles.nav_list}>
            {navLinks.map(enlace => (
              <Link key={enlace.path} href={enlace.path}>{enlace.name}</Link>
            ))}
          </ul>
        </nav>
        <p>Todos los derechos &copy;Mattias Duarte</p>
      </div>
    </footer>
  )
}

export default Footer