import React from 'react';
import navicon from '../assets/navicon.svg'
import lupa from '../assets/Union.svg'
import logo from '../assets/Vector.svg'
import bag from '../assets/bag2.svg'


const Navbar = () => {
  return(
    <>
       <nav className='navbar'>
           <img src={navicon} width ='28px' height ='28px' alt='navicon' />
           <img className='logo' src={logo} width ='110px' height ='25px' alt='logo' />
           <img className='lupa' src={lupa} alt='logo' />
           <div className='navbar__bag'>
             <img src={bag} alt='logo' /><span>0</span>
           </div>
           
       </nav> 
       
       
    </>  
        
  )

}

export default Navbar;