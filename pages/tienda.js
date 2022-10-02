import { Fade } from 'react-awesome-reveal';
import Layout from '../components/Layout'
import Listado from '../components/tienda/Listado';

const Tienda = ({guitarras}) => {
  return (
    <Layout pagina="Tienda">
      <main className="container">
        <Fade>
          <h1 className="heading">Nuestra coleccion</h1>
        </Fade>
        <Listado
          guitarras={guitarras}
        />

      </main>
    </Layout>  
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/guitarras?populate=imagen&sort=createdAt%3Adesc`)
  const { data } = await response.json();
  return {
    props: {
      guitarras : data
    }
  }
}

export default Tienda