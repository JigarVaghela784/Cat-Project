import * as actionTypes from '../action/actionType'
const initialState={
  data:null,
  error:null,
  loading:false
}

const reducer=(state=initialState,action)=>{
  switch (action.type) {
    case actionTypes.FAVOURITE_IMAGE_START:
      return{
        ...state,
        loading:true
      }
  
    case actionTypes.FAVOURITE_IMAGE_FAIL:
      return{
        ...state,
        error:action.error,
        loading:false
      }
  
    case actionTypes.FAVOURITE_IMAGE_SUCCESS:
      // const favId=JSON.parse(localStorage.getItem("favId"))||[]
      const newId=[];
      newId?.concat(action?.data?.id)
      console.log('favID', newId)
      // localStorage.setItem("favId",JSON.stringify(favId))
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