import React from 'react';

const ColorsPicker = () =>{
    return(
        
                <form className ='buttons'>
                    <input className='inner' id='radio1' name='color' value='red' type='radio'></input>
                    <input className='inner' id='radio2' name='color' value='white' type='radio'></input>
                    <input className='inner' id='radio3' name='color' value='blue' type='radio'></input>
                    <input className='inner' id='radio4' name='color' value='purple' type='radio'></input>
                    
                </form>
            
    )

}

export default ColorsPicker