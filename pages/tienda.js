import Layout from '../components/Layout'
import Guitarra from '../components/tienda/Guitarra';
import styles from "../styles/Listado.module.css";
import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

const Tienda = () => {
  const [loading, setLoading] = useState(false)
  const [guitarras, setGuitarras] = useState()

  const getGuitarras = async () =>{
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/guitarras?populate=imagen&sort=createdAt%3Adesc`)
      const { data } = await response.json();
      setLoading(false)
      setGuitarras(data)
    } catch (error) {
      getGuitarras();
    }
  }

  useEffect(() => {
    getGuitarras();
    setLoading(true);
  }, [])
  
  return (
    <Layout pagina="Tienda">
      <main className="container">
        <Fade>
          <h1 className="heading">Nuestra coleccion</h1>
        </Fade>
        <div className={styles.listado}>
          <Fade cascade duration={300} triggerOnce>

          {loading
            ? <Loading/>
            : guitarras?.map(guitarra =>
              <Guitarra
              key={guitarra.id}
                guitarra={guitarra.attributes}
                />
            )
          }

          </Fade>
        </div>
      </main>
    </Layout>
  )
}

// export async function getServerSideProps() {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/guitarras?populate=imagen&sort=createdAt%3Adesc`)
//   const { data } = await response.json();
//   return {
//     props: {
//       guitarras: data
//     }
//   }
 
  
// }

export default Tienda