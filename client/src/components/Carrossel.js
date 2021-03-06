import React from 'react'
import {Link} from 'react-router-dom'
import produto from '../assets/prod02.svg'
import thumb from '../assets/thumb.svg'

const Carrossel = () =>{
    return(
        <>
        
        <div className='carrossel'>
          <div className='carrossel__session'>
            <Link className='link' to='/'> Home </Link>  
            <Link className='link' to='/'><span>/&nbsp;&nbsp;Sapatos</span> </Link>
          </div>

           <a href='/#'>
            <input id='carrossel__radio1' type='radio' name='radio'/>
            <img className='thumb' src ={thumb}  alt='produto' />
            <img className='big' src ={produto} alt='produto' />
           
          </a> 
          <a href='/#'>
            <input id='carrossel__radio2' type='radio' name='radio'/>
            <img className='thumb' src ={thumb}  alt='produto' />
            <img className='big' src ={produto} alt='produto' />
            
          </a>
          
          <a href='/#'>
            <input id='carrossel__radio3' type='radio' name='radio'/>
            <img className='thumb' src ={thumb}  alt='produto' />
            <img className='big' src ={produto} alt='produto' />
            
          </a>
          
          <a href='/#'>
            <input id='carrossel__radio4' type='radio' name='radio'/>
            <img className='thumb' src ={thumb}  alt='produto' />
            <img className='big' src ={produto} alt='produto' />
            
          </a>
          
          <a href='/#'>
          <input id='carrossel__radio5' type='radio' name='radio'/>
            <img className='thumb' src ={thumb}  alt='produto' />
            <img className='big' src ={produto} alt='produto' />
            
            
          </a>
          
          <a href='/#'>
            
            <img className='big__featured' src ={produto} alt='produto' />
          </a>
         <div className='carrossel__manual-btn'>
          <label htmlFor='carrossel__radio1' className='manual-btn' />
          <label htmlFor='carrossel__radio2' className='manual-btn' />
          <label htmlFor='carrossel__radio3' className='manual-btn' />
          <label htmlFor='carrossel__radio4' className='manual-btn' />
          <label htmlFor='carrossel__radio5' className='manual-btn' />
         </div>
        
        </div>
        
        </>
        )
}

export default Carrossel;