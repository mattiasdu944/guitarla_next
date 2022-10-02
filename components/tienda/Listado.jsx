import React, { useEffect, useState } from 'react'
import Guitarra from './Guitarra'
import styles from "../../styles/Listado.module.css";
import { Fade } from 'react-awesome-reveal';
const Listado = ({ guitarras }) => {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    guitarras == null ? setLoading(true) : setLoading(false)
  }, [guitarras])


  return (
    <div className={styles.listado}>
      <Fade cascade duration={500}>

      {loading
        ? <>Cargando Contenido</>
        : guitarras.map(guitarra =>
          
          <Guitarra
          key={guitarra.id}
          guitarra={guitarra.attributes}
          />
          )
        }
      </Fade>
    </div>
  )
}

export default Listado