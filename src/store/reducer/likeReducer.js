import * as actionType from '../action/actionType'

const initialState={
    data:0,
    error:null,
    loading:false
}
console.log('data',initialState.data)
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionType.LIKE_IMAGE_START:
            return{
                ...state,
                loading:true
            }
    
        case actionType.LIKE_IMAGE_FAIL:
            return{
                ...state,
                error:action.error,
                loading:false,
            }
        case actionType.LIKE_IMAGE_SUCCESS:
            console.log('action.data123456', action.data)
            return{
                ...state,
                data:action.data,
                loading:false,
            }
        case actionType.UNLIKE_IMAGE_START:
            return{
                ...state,
                loading:true
            }
    
        case actionType.UNLIKE_IMAGE_FAIL:
            return{
                ...state,
                error:action.error,
                loading:false,
            }
        case actionType.UNLIKE_IMAGE_SUCCESS:
            return{
                ...state,
                data:action.data,
                loading:false,
            }

        default:
            return state
    }
}
export default reducer;