import React from 'react'
import {Link} from 'react-router-dom';

const ProductSizes = () => {
    return (
    <> 
        <div className='product__size'>
            <span>Tamanho:</span>
            <Link to='/medidas'>Guia de medidas </Link>

        </div>
        
        <form className='product__size__pickers' >
                <input id='size1' type='radio' name='size'></input>
                  <label htmlFor='size1' className='label'>33</label>
                
                <input id='size2' type='radio' name='size'></input>
                  <label htmlFor='size2' className='label'>34</label>
                
                <input id='size3' type='radio' name='size'></input>
                  <label htmlFor='size3' className='label'>35</label>
                
                <input id='size4' type='radio' name='size'></input>
                  <label htmlFor='size4' className='label'>36</label>
                
                <input id='size5' type='radio' name='size'></input>
                  <label htmlFor='size5' className='label'>37</label>
                
                <input id='size6' type='radio' name='size'></input>
                  <label htmlFor='size6' className='label'>38</label>
                
                <input id='size7' type='radio' name='size'></input>
                  <label htmlFor='size7' className='label'>39</label>
                
                <input id='size8' type='radio' name='size'></input>
                  <label htmlFor='size8' className='label'>40</label>
                
            </form>
    </>
    )        
}

export default ProductSizes;