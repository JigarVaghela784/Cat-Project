import * as actionTypes from '../action/actionType'
const initialState={
  data:null,
  error:null,
  loading:false
}

const reducer=(state=initialState,action)=>{
  switch (action.type) {
    case actionTypes.FETCH_IMAGE_START:
      return{
        ...state,
        loading:true
      }
  
    case actionTypes.FETCH_IMAGE_FAIL:
      return{
        ...state,
        error:action.error,
        loading:false
      }
  
    case actionTypes.FETCH_IMAGE_SUCCESS:
      return{
        ...state,
        data:action.data,
        loading:false
      }
  
    default:
      return state
  }

}
export default reducer;