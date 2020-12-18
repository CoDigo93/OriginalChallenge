import React,{useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {Link} from 'react-router-dom'
import navicon from '../assets/navicon.svg'
import lupa from '../assets/Union.svg'
import logo from '../assets/Vector.svg'
import bag from '../assets/bag2.svg'
import {useShoppingCart} from '../context/ShoppingCart'
import ShoppingCart from './ShoppingCart'
import {useSideNavbar} from '../context/MobileSideNavbar'


const Navbar = () => {
  const isMobile = true;
  const {showShoppingCart,setShowShoppingCart} = useShoppingCart()
  const {showSideNavigation, setShowSideNavigation} = useSideNavbar();
  const [ulSections,setUlSections] = useState('sections')



const handleShoppingCart = () => {
    setShowShoppingCart(true);
  
  }



  const toggleMobileSideNavigation = () => {
    
    setShowSideNavigation(!showSideNavigation)
    showSideNavigation ? setUlSections('sections--active')
    : 
    setUlSections(ulSections)
  }
  


  return(
    <>
    {showShoppingCart ? <ShoppingCart /> : null}

       <div className='div-logoweb'>
         <img className='logo--web' src={logo} alt='logo' />
       </div>

       <nav className='navbar'>
            
         <div className='navbar__sign'>
           <Link className='link' to='/log-in'>Entrar</Link> |
           <Link className='link' to='/sign-up'>Cadastre-se</Link>
        </div>  
        
        
          {showSideNavigation ? <div className='modal'></div> : null}
        
        
        <div className='sections__conteiner'>
        
          {isMobile  ?
            <CSSTransition in={showSideNavigation} 
                           appear={true}
                           timeout={300} 
                           classNames='slide'
                           unmountOnExit
                           >
              
              <ul className= 'sections__mobile'> 
                <li>
                  <div className='navbar__sign--mobile'>
                    <Link className='link' to='/log-in'>Entrar</Link> |
                    <Link className='link' to='/sign-up'>Cadastre-se</Link>
                    <button onClick={()=> toggleMobileSideNavigation()} />
                  </div> 
              </li>
                <li><Link className='link' to='/sapatos'>SAPATOS</Link></li>
                <li><Link className='link' to='/bolsas'>BOLSAS</Link></li>
                <li><Link className='link' to='/acessorios'>ACESSÓRIOS</Link></li>
                <li><Link className='link' to='/promocao'>OFF</Link></li>
              </ul>
            </CSSTransition>
            
            :

            <ul className= 'sections'>
              <li><Link className='link' to='/sapatos'>SAPATOS</Link></li>
              <li><Link className='link' to='/bolsas'>BOLSAS</Link></li>
              <li><Link className='link' to='/acessorios'>ACESSÓRIOS</Link></li>
              <li><Link className='link' to='/promocao'>OFF</Link></li>
          </ul>  
        } 
        </div>
          <div className='navigation__div' onClick={() => toggleMobileSideNavigation()}>       
           <img className='navigation'
                src={navicon}  
                alt='navicon' />
          </div>
           <img className='logo' 
                src={logo} 
                width ='110px' 
                height ='25px' 
                alt='logo' />
           
           

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
            
            
              
            <div onClick ={() => handleShoppingCart()} className='navbar__bag'>
              <img src={bag} alt='logo' /><span>5</span>
            </div>
          </div>
          
       </nav> 
       
       
    </>  
        
  )

}

export default Navbar;