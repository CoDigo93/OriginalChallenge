import React from 'react'
import produto from '../assets/prod02.svg'

const Carrossel = () =>{
    return(
        <div className='product'>
            <h3>RASTEIRA TIRA DEDO</h3>
            <span>RT 0568 | 03.07.0653</span>
            <img src ={produto} alt='produto' />
        </div>
        )
}

export default Carrossel;