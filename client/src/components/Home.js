import React from 'react'
import Navbar from './Navbar'
import Carrossel from './Carrossel'
import Products from './Products'
import Footer from './Footer'

const Home = () => {
    return (
      <>
      <Navbar/>
       <main className='main'>
          
          <Carrossel/>
          <Products/>
          <Footer/>
        </main>
      </>  
    )
}

export default Home;