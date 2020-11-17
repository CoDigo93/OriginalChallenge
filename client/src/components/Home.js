import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import Footer from './Footer'

const Home = () => {
    return (
      <>
      <Navbar/>
       <main className='main'>
          
          <Products/>
          <Footer/>
        </main>
      </>  
    )
}

export default Home;