
import Entrada from '../components/Entrada';
import Layout from '../components/Layout'
import styles from '../styles/Blog.module.css'
const blog = ({ entradas }) => {
  return (
    <Layout pagina='Blog'>
      <main className='container'>

      <h2 className='heading'>Blog</h2>

      <div className={styles.entradas_container}>

      {entradas.map(entrada => (
        <Entrada
        key={entrada.id}
        entrada={entrada}
        />
        ))}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:1337/blogs')
  const entradas = await response.json();

  return {
    props: {
      entradas
    }
  }
}

export default blog