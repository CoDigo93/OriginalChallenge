import React from 'react'
import ColorsPicker from './ColorsPicker';

const ProductColors = () => {
    return(
        <div className='product__colors'> 
            <p>Cor:</p>
            <ColorsPicker/>
        </div>
    )
}

export default ProductColors;