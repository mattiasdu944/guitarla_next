import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Entrada.module.css";
import { formatearFecha } from "../helpers";

const Entrada = ({ entrada, id }) => {
  const {titulo, resumen, publishedAt, descripcion, imagen} = entrada;
  const imagenBlog = imagen.data.attributes;
  
  return (
    <article className={styles.entrada}>
      <Image priority="true" layout="responsive" src={imagenBlog.url} width={800} height={600} alt={`Imagen Blog ${titulo}`} />
      
      <div className={styles.entrada_content}>
        <h3>{titulo}</h3>
      
        <p className={styles.entrada_fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.entrada_resumen}>{resumen}</p>
      
        <div className={styles.entrada_enlace}>
          <Link href={`/blog/${id}`}>
            Leer Entrada
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Entrada