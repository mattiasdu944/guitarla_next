import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children, pagina=''}) => {
  return (
    <>
        <Head>
            <title>{`GuitarLA | ${pagina}`}</title>
            <meta name='description' content='Sitio Web de venta de guitarras GuitarLA'/>
        </Head>
        <Header/>
    
          {children}
    
        <Footer/>
    </>
  )
}

export default Layout