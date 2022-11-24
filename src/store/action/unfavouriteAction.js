import { notification } from "antd";
import axios from "axios";
import * as actionType from "./actionType";
export const unfavouriteImageStart = () => {
  return {
    type: actionType.UNFAVOURITE_IMAGE_START,
  };
};

export const unfavouriteImageSuccess = (data,resData) => {
  return {
    type: actionType.UNFAVOURITE_IMAGE_SUCCESS,
    data,
    resData,
  };
};

export const unfavouriteImageFail = (error) => {
  return {
    type: actionType.UNFAVOURITE_IMAGE_FAIL,
    error,
  };
};
export const unfavouriteImage = (favourite_id, element) => {
  console.log('element', element)
  console.log('favourite_id', favourite_id)
  return async (dispatch) => {
    dispatch(unfavouriteImageStart());
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const res = await axios.delete(
        `https://api.thecatapi.com/v1/favourites/${favourite_id}`);
      let resData=[]
        notification["success"]({
                message: "Unfavourite!!",
              });
      dispatch(unfavouriteImageSuccess(res,resData));
      console.log("res", res);
    } catch (error) {
         notification["error"]({
                message: error.response.data,
              });
      dispatch(unfavouriteImageFail());
      console.log("error", error);
    }
  };
};
