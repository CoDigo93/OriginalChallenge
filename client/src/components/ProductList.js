import React from 'react'
import {useProductList} from '../context/ShoppingCart'
import ProductItem from './ProductItem'


const ProductList = () =>{
    const {productList} = useProductList();

    return(
        productList.map((product, index) => 
            <ProductItem key={`product_List_${index + 1}`}
                         id={product.id}
                         name={product.name}
                         color={product.color}
                         price={product.price}
                         quantity={product.quantity}/>

            
            )
    )
}

export default ProductList;