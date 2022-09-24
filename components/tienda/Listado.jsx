import React from 'react'
import Guitarra from './Guitarra'
import styles from "../../styles/Listado.module.css";
const Listado = ({guitarras}) => {
  return (
    <div className={styles.listado}>
      {guitarras ? 
        guitarras.map(guitarra => 
            <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
            />   
        )
      : <>Cargando Guitarras</>}
    </div>
  )
}

export default Listado