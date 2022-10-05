import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import styles from '../../styles/Guitarra.module.css'

const Guitarra = ({ guitarra }) => {
  const { titulo, precio, descripcion, url } = guitarra;
  const imagen = guitarra.imagen.data[0].attributes;

  return (

    <div className={styles.guitarra}>

      <Image
        layout="intrinsic"
        width={250} height={450}
        src={imagen.url}
        alt={titulo}
      />
      <div className={styles.guitarra_content}>
        <h3>{titulo}</h3>
        <p className={styles.guitarra_description}>{descripcion}</p>
        <p className={styles.guitarra_precio}>Precio: ${precio}</p>
        <div className={styles.guitarra_enlace}>
          <Link href={`/guitarras/${url}`}>Ver Producto</Link>
        </div>
      </div>

    </div>
  )
}

export default Guitarra