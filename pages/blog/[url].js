import Image from "next/image"
import Layout from "../../components/Layout"
import { formatearFecha } from "../../helpers"
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({ entrada }) => {

    const { titulo, descripcion, publishedAt, url } = entrada;
    const imagen = entrada.imagen.data[0].attributes;

    return (
        <Layout pagina={titulo}>
            <main className="container">
                <article className={styles.entrada_article}>
                    <Image layout="responsive" width={600} height={400} src={imagen.url} alt={`Imagen entrada ${titulo}`} />
                    <div className={styles.entrada_content}>
                        <h1 className={styles.blog_title}>{titulo}</h1>
                        <p className={styles.blog_fecha}>
                            Publicado: {formatearFecha(publishedAt)}
                        </p>
                        <p className={styles.blog_description}>
                            {descripcion}
                        </p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url } }) {
    const responnse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[url][$eq]=${url}&populate=imagen`)
    const { data } = await responnse.json();
    return {
        props: {
            entrada: data[0].attributes
        }
    }
}

export default EntradaBlog