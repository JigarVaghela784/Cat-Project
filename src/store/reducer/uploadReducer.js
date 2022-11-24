import * as actionType from "../action/actionType";

const initialState = {
  data: null,
  error: null,
  loading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPLOAD_IMAGE_START:
      // return updatedObject(state,{error:null,loading:true})
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionType.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        data:action.data,
        loading: false,
      };

    case actionType.UPLOAD_IMAGE_FAIL:
      // return updatedObject(state,{error:action.error})
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
