

  const GetTotalReducer = (state, action) =>{
    switch (action.type){
        case 'GET_TOTAL':
            return {
                ...state,
                
                totalPrice: state.totalPrice}
            default:
                return state
    }
    
}

export default GetTotalReducer;