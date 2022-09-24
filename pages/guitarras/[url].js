import Image from "next/image";
import Layout from "../../components/Layout";
import styles from '../../styles/Guitarra.module.css'


const Producto = ({ guitarra }) => {
  const { titulo, descripcion, precio } = guitarra;
  const imagen = guitarra.imagen.data[0].attributes

  return (
    <Layout pagina={titulo}>
      <main className="container">

        <div className={styles.guitarra_page}>
          <div className={styles.guitarra_title_page}>

            <h3>Guitarra {titulo}</h3>
            <Image
              width={280} height={550}
              src={imagen.url}
              alt={titulo}
            />
          </div>
          <div className={styles.guitarra_content_page}>
            
            <h4>
              Descripcion
            </h4>
            <p className={styles.guitarra_description_page}>{descripcion}</p>
            <p className={styles.guitarra_precio}>Precio: ${precio}</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}


export async function getServerSideProps({ query: { url } }) {
  const responnse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/guitarras?filters[url][$eq]=${url}&populate=imagen`)
  const { data } = await responnse.json();

  return {
    props: {
      guitarra: data[0].attributes
    }
  }
}

export default Producto