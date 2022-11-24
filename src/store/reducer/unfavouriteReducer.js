import * as actionTypes from '../action/actionType'
const initialState={
  data:[],
  error:null,
  loading:false
}

const reducer=(state=initialState,action)=>{
  switch (action.type) {
    case actionTypes.UNFAVOURITE_IMAGE_START:
      return{
        ...state,
        loading:true
      }
  
    case actionTypes.UNFAVOURITE_IMAGE_FAIL:
      return{
        ...state,
        error:action.error,
        loading:false
      }
  
    case actionTypes.UNFAVOURITE_IMAGE_SUCCESS:
      return{
        ...state,
        data:action.resData,
        loading:false
      }
  
    default:
      return state
  }

}
export default reducer;