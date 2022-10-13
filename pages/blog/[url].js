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


export async function getStaticPaths(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
    const { data } = await response.json();
    // console.log(data[0].attributes.url)
    const paths = data.map( post => ({
        params:{
            url:post.attributes.url
        }
    }))
    console.log(paths)

    return {    
        paths,
        fallback:false
    }
}


export async function getStaticProps({ params: { url } }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[url][$eq]=${url}&populate=imagen`)
    const { data } = await response.json();
    return {
        props: {
            entrada: data[0].attributes
        },
        revalidate: 86400
    }
}

export default EntradaBlog