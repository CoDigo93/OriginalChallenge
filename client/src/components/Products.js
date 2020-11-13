import React from 'react'
import ProductSizes from './ProductSizes'
import ProductColors from './ProductColors'
import ProductSuggestion from './ProductSuggestion'

const Products = () => {
    return (
      <>  
        <ProductColors/>
        <br></br>
        <ProductSizes/>
        <div className='product__prices'>
          <section>
            <span className='product__prices--liquidation'>R$69,00</span>
            <span>R$55,20</span>
            <p>Ou 6x de R$ 9,20</p>
          </section>
          
          <button>ADICIONAR À SACOLA</button>
        </div>
        <div className='product__description'>
          <p >Descrição</p>
          <span>Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</span>
        </div>
        <ProductSuggestion />
      </>  
    )
}

export default Products;