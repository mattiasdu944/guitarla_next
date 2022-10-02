import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Layout from "../components/Layout";
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="container">


        <h2 className="heading">Sobre Nosotros</h2>
        <div className={styles.nosotros_container}>
          <Fade>

          <Image layout="intrinsic" width={600} height={450} src='/img/nosotros.jpg' alt="Imagen Sobre Nosotros"/>
          <div className={styles.nosotros_content}>
            <h3>Nuestra Vision</h3>
            <div className={styles.separator}><span></span></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
              amet placerat tortor, non ornare nisi. Morbi efficitur eu quam eu
              tincidunt. Praesent consequat ex lectus, non aliquet enim posuere
              in. Vestibulum eget neque fermentum magna aliquam malesuada ut ac
              quam. In sed efficitur magna. Praesent et dui massa. Curabitur nec
              eros auctor, luctus sem ultrices, pharetra mauris. Suspendisse ut
              turpis volutpat, molestie velit varius, vehicula justo. Ut metus
              massa, pharetra in tempus quis, placerat sed urna. Nullam eget
              turpis ut ligula facilisis efficitur. Sed eu ultrices nisl. Nulla
              ultricies, mauris vitae ultricies bibendum, lorem magna laoreet
              diam, sed tristique quam ex a eros. Nullam suscipit sed lorem vel
              porttitor. Pellentesque accumsan lorem ac purus ultricies vestibulum
              in vel orci. Morbi ultrices velit eu ipsum faucibus blandit. 
            </p>
          </div>
          </Fade>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
