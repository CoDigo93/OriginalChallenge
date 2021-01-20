

  const GetTotalReducer = (state, action) =>{
    switch (action.type){
        case 'GET_TOTAL':
            return {
                ...state,
                
                totalPrice: state.List.reduce((acc, product) =>
                     acc + (parseFloat(product.price) * parseFloat(product.quantity)),state.totalPrice)
            }

        case 'RECALCULATE_TOTAL_AFTER_INCREMENT':
            return {
                ...state,
                total: state.totalPrice + parseFloat(state.price) * state.productQuantity
            }

            default:
                return state
    }
    
}

export default GetTotalReducer;