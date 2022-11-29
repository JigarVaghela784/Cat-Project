import * as actionTypes from "../action/actionType";
const initialState = {
  fetchData: null,
  fetchLikeData: null,
  fetchFavData: null,
  favData: null,
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
      console.log("data@@", action.data);
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
      // const { fetchData } = state;
      // const tempData = fetchData;
      // console.log('fetchData.id', fetchData[0].id)
      // fetchData.filter((element) => {
      //   const findData = action.data.filter((ele) => {
      //     if (element.id === ele.image_id) {
      //       console.log("element", element.favourite);
      //       console.log("ele", ele);
      //       console.log("newfsys",element.id,ele.image_id)
      //       return
      //     }
      //   });
      // });
      // console.log("fetchData", tempData);
      // console.log("action.data", action.data);
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
      return {
        ...state,
        favData: action.data,
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
        data: action.data,
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
        data: action.resData,
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
      // return updatedObject(state,{error:null,loading:true})
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        data: action.data,
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
