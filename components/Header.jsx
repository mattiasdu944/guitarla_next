import { navLinks } from "../constants/constants";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_container}>
                    <Link href='/'>
                        <>
                            <Image width={300} height={90} src='/img/logo.svg' alt="Imagen Logo" />
                        </>
                    </Link>

                    <nav>
                        <ul className={styles.nav_list}>
                            {navLinks.map(enlace => (
                                <Link key={enlace.path} href={enlace.path}>{enlace.name}</Link>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header