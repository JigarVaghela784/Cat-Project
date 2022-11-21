import * as actionType from "../action/actionType";

const initialState = {
  data: null,
  error: null,
  loading: false,
  favourite_id: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FAVOURITE_IMAGE_START:
      return {
        ...state,
        loading: true,
      };

    case actionType.FAVOURITE_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.FAVOURITE_IMAGE_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case actionType.UNFAVOURITE_IMAGE_START:
      return {
        ...state,
        loading: true,
      };

    case actionType.UNFAVOURITE_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.UNFAVOURITE_IMAGE_SUCCESS:
      return {
        ...state,
        data: action.data,
        favourite_id: action.favourite_id,
        loading: false,
      };

    default:
      return state;
  }
};
export default reducer;
