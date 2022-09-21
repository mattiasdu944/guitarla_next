import Image from "next/image";
import Layout from "../../components/Layout";
import styles from '../../styles/Guitarra.module.css'


const Producto = ({ guitarra }) => {
  const { titulo, descripcion, precio } = guitarra;
  const imagen = guitarra.imagen.data[0].attributes

  return (
    <Layout pagina={titulo}>
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          width={180} height={350}
          src={imagen.url}
          alt={titulo}
        />

        <div className={styles.guitarra_content}>
          <h3>{titulo}</h3>
          <p className={styles.guitarra_description_page}>{descripcion}</p>
          <p className={styles.guitarra_precio}>Precio: ${precio}</p>
        </div>

      </div>
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