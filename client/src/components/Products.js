import React from 'react'
import ProductSizes from './ProductSizes'
import ProductColors from './ProductColors'
import ProductSuggestion from './ProductSuggestion'
import Carrossel from './Carrossel'

const ProductDescription = 'Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.'

const Products = () => {
    return (
      <>  
      <div className='product__main'>
        <div className='product__carrossel'> 
            <Carrossel/>
            <div className='product__id'>
              <div className='product__name' >           
                <h3>RASTEIRA TIRA DEDO</h3>
                <span>RT 0568 | 03.07.0653</span>
              </div>
              <div className='product__prices--web'>
                <section>
                  <span className='product__prices--liquidation'>R$69,00</span >
                  <span className='product__prices--liquidation'>|</span> 
                  <span className='product__prices--normal'>R$55,20</span>
                  <p>Ou 6x de R$ 9,20</p>
                </section>
              </div>  
              <ProductColors/>
              <ProductSizes/>
              <div className='product__prices'>
                <section>
                  <span className='product__prices--liquidation'>R$69,00</span>
                  <span className='product__prices--normal'>R$55,20</span>
                  <p>Ou 6x de R$ 9,20</p>
                </section>
                
                <button>ADICIONAR À SACOLA</button>
                
                <div className='product__description--web'>
                  
                    <span>{ProductDescription}</span>
                </div>
            
            </div>
          </div>
        </div>
        
      </div>

        <div className='product__description'>
          <p >Descrição</p>
            <span>{ProductDescription}</span>
        </div>
        <ProductSuggestion />
      
      </>  
    )
}

export default Products;