import React from 'react'
import {useProductList} from '../context/ShoppingCart'
import ProductItem from './ProductItem'


const ProductList = () =>{
    const {productList, setProductList} = useProductList();

    return(
        productList.map(product => 
            <ProductItem id={product.id}
                         name={product.name}
                         color={product.color}
                         price={product.price}
                         quantity={product.quantity}/>

            
            )
    )
}

export default ProductList;