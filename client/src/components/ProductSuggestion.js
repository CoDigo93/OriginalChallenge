import React from 'react'
import purses from '../assets/bolsas.svg'
import sandals from '../assets/prod02.svg'
import arrowRight from '../assets/chevron-right.svg'
import arrowLeft from '../assets/chevron-left.svg'
import sandals2 from '../assets/sandals2.svg'
import purse2 from '../assets/purse2.svg'
import ColorsPicker from './ColorsPicker'


const ProductSuggestion = () => {
    return (
      <>  
      <div className='product__suggestion'>
        <h2>QUEM VIU, VIU TAMBÉM</h2>
          <div className='product__images'>
          
          <ul>
              <li><img src={purse2}  alt='bolsas' /></li>
              <li><p>R$204,90</p><span><ColorsPicker/></span></li> 
              
              <li><p className='product__images--parceled'>Ou 6x de R$34,15</p></li>
            </ul>
          <ul>
              <li><img src={sandals2}  alt='bolsas' /></li>
              <li><p>R$204,90</p><span><ColorsPicker/></span></li>
              <li><p className='product__images--parceled'>Ou 6x de R$34,15</p></li>
            </ul>
            <ul>
              <li><img src={purses}  alt='bolsas' /></li>
              <li><p>R$204,90</p><span><ColorsPicker/></span></li>
              <li><p className='product__images--parceled'>Ou 6x de R$34,15</p></li>
            </ul>
            <ul>
              <img src={sandals} alt='bolsas' width='138px' height='178,35'/>
                  <li><p>R$204,90</p><span><ColorsPicker/></span></li>
                  <li><p className='product__images--parceled'>Ou 6x de R$34,15</p></li>
            </ul>
          </div>
          
          <div className='suggestion__buttons'>          
            <button type='button'><img src={arrowLeft} alt='left' /></button>
            <span>1 de 10</span>
            <button type='button'><img src={arrowRight} alt='right' /></button>
          </div>
      </div>  
      </> 
    )
}

export default ProductSuggestion;