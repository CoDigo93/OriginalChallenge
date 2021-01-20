

    


const CounterReducer = (state , action) => {
    
    
    switch(action.type){
        case 'INCREMENT':
            
            return {
                ...state,
                productQuantity: state.productQuantity + 1,
                wholeSalePrice: parseFloat(state.wholeSalePrice) + parseFloat(state.price),
                total: state.total + (state.price * state.productQuantity)
                
            }     
    
        case 'DECREMENT':
            if(state.productQuantity > 1)
            return {
                ...state,
                productQuantity: state.productQuantity - 1,
                wholeSalePrice: parseFloat(state.wholeSalePrice) - parseFloat(state.price),
                
            }
            break
            default:
                return state;
    }

}

export default CounterReducer;