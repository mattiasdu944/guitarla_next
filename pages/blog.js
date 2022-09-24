import Entrada from '../components/Entrada';
import Layout from '../components/Layout'
import styles from '../styles/Blog.module.css'


const blog = ({ entradas }) => {
  return (
    <Layout pagina='Blog GuitarLA'>
      <main className='container'>
        <h2 className='heading'>Blogs</h2>
        <div className={styles.entradas_container}>
          {entradas.map(entrada => (
            <Entrada
              key={entrada.id}
              id={entrada.id}
              entrada={entrada.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=imagen&sort=createdAt%3Adesc`)
  const { data } = await response.json();
  const entradas = data
  return {
    props: {
      entradas
    }
  }
}

export default blog