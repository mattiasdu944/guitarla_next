import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children, pagina}) => {
  return (
    <>
        <Head>
            <meta name='description' content='Sitio Web de venta de guitarras GuitarLA'/>
            <title>GuitarLA | {pagina}</title>
        </Head>
        <Header/>
    
          {children}
    
        <Footer/>
    </>
  )
}

export default Layout