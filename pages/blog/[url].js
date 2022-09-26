import Image from "next/image"
import Layout from "../../components/Layout"
import { formatearFecha } from "../../helpers"
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({ entrada }) => {
    
    const {titulo, descripcion, publishedAt, url} = entrada;
    const imagen = entrada.imagen.data[0].attributes;

    return (
        <Layout pagina={titulo}>
            <main className="container">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout="responsive" width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`} />
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

export async function getServerSideProps({ query: { url } }) {
    const responnse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?filters[url][$eq]=${url}&populate=imagen`)
    const { data } = await responnse.json();
    return {
      props: {
        entrada: data[0].attributes
      }
    }
  }

export default EntradaBlog