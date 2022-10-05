import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../../helpers";
import styles from '../../styles/Entrada.module.css'

const Post = ({ post }) => {
    const { titulo, resumen, url, publishedAt } = post;
    const imagen = post.imagen.data[0].attributes;
    return (
        <article className={styles.entrada}>
            <Image priority layout="responsive" width={800} height={600}
                src={imagen.url} alt={`imagen blog ${titulo}`}
            />
            <div className={styles.entrada_content}>
                <h3>{titulo}</h3>
                <p className={styles.entrada_fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.entrada_resumen}>{resumen}</p>
                <Link href={`/blog/${url}`}>
                    Leer Post
                </Link>
            </div>
        </article>
    )
}

export default Post