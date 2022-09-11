import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="container">


        <h2 className="heading">Nosotros</h2>
        <div className={styles.nosotros_container}>
          <Image layout="intrinsic" width={600} height={450} src='/img/nosotros.jpg' alt="Imagen Sobre Nosotros"/>
          <div>
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
            <p>
              Aliquamquis egestas neque. Integer vel erat fringilla, varius erat eget,
              fermentum neque. Curabitur at viverra augue, vel dictum justo.
              Aliquam congue, libero vitae placerat lobortis, tortor orci dictum
              felis, convallis commodo turpis nisi quis tellus. Cras molestie
              pharetra eros id commodo. Aenean rhoncus justo hendrerit nisl
              euismod elementum. Vivamus vestibulum mauris at enim auctor, sit
              amet elementum sem imperdiet. Donec sit amet risus eu velit
              tincidunt vehicula at id libero. Curabitur at congue massa.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
