import { Fade } from "react-awesome-reveal";
import Entrada from "../components/entradas/Entrada";
import Layout from "../components/Layout"
import styles from "../styles/Listado.module.css"
const Entradas = ({entradas}) => {
  return (
    <Layout pagina={'Blogs'}>
        <main className="container">
            <h3 className="heading">Blogs</h3>
            <div className={styles.listado}>
            <Fade cascade duration={350}>

            {entradas.map(entrada =>
              <Entrada
              key={entrada.id}
              entrada={entrada.attributes}
              />  
              )}
            </Fade>
            </div>
        </main>
    </Layout>
  ) 
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=imagen&sort=createdAt%3Adesc`)
  const { data } = await response.json();
  return {
    props: {
      entradas : data
    }
  }
}

export default Entradas