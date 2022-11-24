import * as actionType from '../action/actionType'

const initialState={
    data:null,
    error:null,
    loading:false
}
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

        default:
            return state
    }
}
export default reducer;