import * as actionType from "../action/actionType";

const initialState = {
  data: null,
  fetchData: null,
  error: null,
  loading: false,
  isHeart: false,
  favourite_id:null ,
  // favouriteData: [],
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
      // console.log('action.data', action.data)
      // let newid=state.favourite_id?.concat(action.data)
      // console.log('action.favourite_id', newid)

      // let elementId = JSON.parse(localStorage.getItem("image_id")) || [];
      // elementId.push(action.element.id);
      // localStorage.setItem("image_id", JSON.stringify(elementId));
      
      // let elementId = JSON.parse(localStorage.getItem("image_id")) || [];
      // elementId.push(action.data);
      // localStorage.setItem("image_id", JSON.stringify(elementId));
      
     
      return {
        ...state,
        data: action.data,
        favourite_id: action.data,
        // favouriteData: tempData,
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
      const newElId = JSON.parse(localStorage.getItem("image_id"));
      // const contactList = newElId.filter((el) => {
        // console.log('el', el)
        // console.log('action.element', )
        // return el !== action.element.id;
      // });
      // console.log('contactList', contactList)
      localStorage.setItem("image_id", JSON.stringify(newElId));
      // console.log("newElId", contactList);

      return {
        ...state,
        data: action.data,
        favourite_id: action.favourite_id,
        isHeart: action.isHeart,
        loading: false,
      };
    case actionType.FETCH_FAVOURITE_IMAGE_START:
      return {
        ...state,
        loading: true,
      };

    case actionType.FETCH_FAVOURITE_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionType.FETCH_FAVOURITE_IMAGE_SUCCESS:
      return {
        ...state,
        fetchData: action.fetchData,
      };

    default:
      return state;
  }
};
export default reducer;
