import React from 'react'
import produto from '../assets/prod02.svg'
import thumb from '../assets/thumb.svg'

const Carrossel = () =>{
    return(
        <>
        <div className='carrossel'>
           <a href='/#'>
            <video className='thumb' src ={thumb}  alt='produto' />
            <video className='big' src ={produto} alt='produto' />
            <input id='carrossel__radio1' type='radio' name='radio'/>
            
          </a> 
          <a href='/#'>
            <img className='thumb' src ={thumb}  alt='produto' />
            <img className='big' src ={produto} alt='produto' />
            <input id='carrossel__radio2' type='radio' name='radio'/>
              
          </a>
          
          <a href='/#'>
            <img className='thumb' src ={thumb}  alt='produto' />
            <img className='big' src ={produto} alt='produto' />
            <input id='carrossel__radio3' type='radio' name='radio'/>
            
          </a>
          
          <a href='/#'>
            <img className='thumb' src ={thumb}  alt='produto' />
            <img className='big' src ={produto} alt='produto' />
            <input id='carrossel__radio4' type='radio' name='radio'/>
            
          </a>
          
          <a href='/#'>
            <img className='thumb' src ={thumb}  alt='produto' />
            <img className='big' src ={produto} alt='produto' />
            <input id='carrossel__radio5' type='radio' name='radio'/>
            
          </a>
          
          <a href='/#'>
            
            <img className='big__featured' src ={produto} alt='produto' />
          </a>

          <div className='carrossel__manual-btn'>
            <label for='carrossel__radio1' className='manual-btn'/>
            <label for='carrossel__radio2' className='manual-btn'/>
            <label for='carrossel__radio3' className='manual-btn'/>
            <label for='carrossel__radio4' className='manual-btn'/>
            <label for='carrossel__radio5' className='manual-btn'/>
        </div>
        </div>
        
        </>
        )
}

export default Carrossel;