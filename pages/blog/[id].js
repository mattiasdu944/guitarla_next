import Image from "next/image"
import Layout from "../../components/Layout"
import { formatearFecha } from "../../helpers"
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({ entrada }) => {
    const { attributes: { titulo, descripcion, publishedAt, } } = entrada

    const { attributes: { imagen: { data: { attributes: { url } } } } } = entrada

    return (
        <Layout>

            <main className="container">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout="responsive" width={800} height={600} src={url} alt={`Imagen entrada ${titulo}`} />
                    <div className={styles.entrada_content}>
                        <p className={styles.entrada_fecha}>
                            {formatearFecha(publishedAt)}
                        </p>

                        <p className={styles.entrada_text}>
                            {descripcion}
                        </p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=imagen`)
    const { data } = await response.json();

    const paths = data.map(entrada => ({
        params: { id: entrada.id.toString() }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { id } }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}?populate=imagen`)
    const { data } = await response.json();
    const entrada = data
    return {
        props: {
            entrada
        }
    }
}



export default EntradaBlog