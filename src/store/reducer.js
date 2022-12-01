import * as actionTypes from "./actionType";
const initialState = {
  uploadData: null,
  fetchData: null,
  fetchLikeData: null,
  fetchFavData: null,
  favData: null,
  favElData: null,
  likeData: null,
  likeElData: null,
  error: null,
  loading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_IMAGE_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actionTypes.FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        fetchData: action.data,
        loading: false,
      };
    case actionTypes.FETCH_LIKE_IMAGE_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_LIKE_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actionTypes.FETCH_LIKE_IMAGE_SUCCESS:
      return {
        ...state,
        fetchLikeData: action.data,
        loading: false,
      };
    case actionTypes.FETCH_FAVOURITE_IMAGE_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_FAVOURITE_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actionTypes.FETCH_FAVOURITE_IMAGE_SUCCESS:
      return {
        ...state,
        fetchFavData: action.data,
        loading: false,
      };
    case actionTypes.FAVOURITE_IMAGE_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FAVOURITE_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actionTypes.FAVOURITE_IMAGE_SUCCESS:
      // state.favData.push(action.data);
      // state.favElData.push(action.favData)
      return {
        ...state,
        favData: action.data,
        // favElData:state.favElData,
        favElData: action.favData,
        loading: false,
      };
    case actionTypes.LIKE_IMAGE_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.LIKE_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionTypes.LIKE_IMAGE_SUCCESS:
      return {
        ...state,
        likeData: action.data,
        likeElData: action.likeData,
        loading: false,
      };
    case actionTypes.UNFAVOURITE_IMAGE_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.UNFAVOURITE_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actionTypes.UNFAVOURITE_IMAGE_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case actionTypes.UNLIKE_IMAGE_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.UNLIKE_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionTypes.UNLIKE_IMAGE_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case actionTypes.UPLOAD_IMAGE_START:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadData: action.data,
        loading: false,
      };

    case actionTypes.UPLOAD_IMAGE_FAIL:
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