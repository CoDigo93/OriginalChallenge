import React,{useCallback} from 'react'
import {useProductList} from '../context/ShoppingCart'
import ProductItem from './ProductItem'


const ProductList = () =>{
    const {productList, setProductList} = useProductList();
    

  
    const deleteProduct = useCallback(id =>{
        let newProductList = productList.filter(elem => elem.id !== id)
        setProductList(newProductList); 
  },[setProductList,productList])




    return(
        productList.map((product, index) => 
            <ProductItem key={`product_List_${product.id}`}
                         id={product.id}
                         name={product.name}
                         color={product.color}
                         price={product.price}
                         quantity={product.quantity}
                         onDelete={id => deleteProduct(id)}
                        />

            
            )
    )
}

export default ProductList;