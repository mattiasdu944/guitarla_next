import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/NoEncontrado.module.css"
const NoEncontrado = () => {
  return (
    <>
    <Head>
      <title>GuitarLA | 404</title>
    </Head>
        <div className={styles.no_encontrado}>

            <h1 className="heading">Pagina No encontrada</h1>
            <Link href="/">Volver a Inicio</Link>
        </div>
    </>    
  )
}

export default NoEncontrado