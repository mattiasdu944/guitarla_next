import { Fade } from "react-awesome-reveal";
import Layout from "../components/Layout";
import Post from "../components/blog/Post";
import Guitarra from "../components/tienda/Guitarra";
import Curso from "../components/inicio/Curso";
import styles from "../styles/Listado.module.css";

export default function Home({ guitarras, posts, curso }) {
  return (
    <Layout pagina='Inicio'>
      <main className="container">
        <h1 className="heading">Nuestra coleccion</h1>
        <div className={styles.listado}>
          <Fade cascade duration={300} triggerOnce>
            {guitarras?.map(guitarra =>
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            )}
          </Fade>
        </div>
      </main>
      <Fade>
        <Curso
          curso={curso.attributes}
        />
      </Fade>
      <section className="container">
        <h2 className="heading">Blog</h2>
        <div className={styles.listado}>
          <Fade cascade duration={350} triggerOnce>
            {posts?.map(post =>
              <Post
                key={post.id}
                post={post.attributes}
              />
            )}
          </Fade>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.NEXT_PUBLIC_API_URL}/api/guitarras?populate=imagen`
  const urlPost = `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=imagen`
  const urlCurso = `${process.env.NEXT_PUBLIC_API_URL}/api/curso?populate=imagen`


  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso)
  ])

  const [{ data: guitarras }, { data: posts }, { data: curso }] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ])

  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }

}
