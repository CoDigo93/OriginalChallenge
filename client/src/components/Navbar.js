import React from 'react';
import {Link} from 'react-router-dom'
import navicon from '../assets/navicon.svg'
import lupa from '../assets/Union.svg'
import logo from '../assets/Vector.svg'
import bag from '../assets/bag2.svg'


const Navbar = () => {
  return(
    <>
       <div className='div-logoweb'>
         <img className='logo--web' src={logo} alt='logo' />
       </div>

       <nav className='navbar'>
            
         <div className='navbar__sign'>
           <Link className='link' to='/log-in'>Entrar</Link> |
           <Link className='link' to='/sign-up'>Cadastre-se</Link>
        </div>  
        <div className='sections'>
          <Link className='link' to='/sapatos'>SAPATOS</Link>
          <Link className='link' to='/bolsas'>BOLSAS</Link>
          <Link className='link' to='/acessorios'>ACESSÓRIOS</Link>
          <Link className='link' to='/promocao'>OFF</Link>
        </div>
           <img className='navigation' src={navicon}  alt='navicon' />
           <img className='logo' src={logo} width ='110px' height ='25px' alt='logo' />
           
           

          <div className='navbar__rightside'>
            <label for='search-mobile'>
               <img src={lupa} alt='lupa' />
            </label>
            <div className='navbar__search--mobile'>
              <input 
                    type='search-mobile'
                    name='search-mobile'
                    placeholder=' '/>
            </div>      
            <input className='navbar__search'
                   type='search'
                   name='search'
                   placeholder='Busca'/>
            
            
              
            <div className='navbar__bag'>
              <img src={bag} alt='logo' /><span>5</span>
            </div>
          </div>
          
       </nav> 
       
       
    </>  
        
  )

}

export default Navbar;