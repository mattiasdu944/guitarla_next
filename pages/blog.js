import { Fade } from "react-awesome-reveal";
import Layout from "../components/Layout"
import Post from "../components/blog/Post";
import styles from "../styles/Listado.module.css"

const blog = ({ posts }) => {
  
  return (
    <Layout pagina={'Blog'}>
      <main className="container">
        <h3 className="heading">Blogs</h3>
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
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=imagen&sort=createdAt%3Adesc`)
  const { data } = await response.json();
  return {
    props: {
      posts: data
    }
  }
}

export default blog