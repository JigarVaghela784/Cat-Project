import { notification } from "antd";
import axios from "axios";
import * as actionType from "./actionType";
export const favouriteImageStart = () => {
  return {
    type: actionType.FAVOURITE_IMAGE_START,
  };
};

export const favouriteImageSuccess = (data) => {
  return {
    type: actionType.FAVOURITE_IMAGE_SUCCESS,
    data:data,
  };
};

export const favouriteImageFail = (error) => {
  return {
    type: actionType.FAVOURITE_IMAGE_FAIL,
    error,
  };
};

export const favouriteImage = (element) => {
  return async (dispatch) => {
    dispatch(favouriteImageStart());
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const res = await axios.post("https://api.thecatapi.com/v1/favourites", {
        image_id: element.id,
      });
      notification["success"]({
        message: "Image Like Successfully!!",
      });
      dispatch(favouriteImageSuccess(res.data));
      console.log('res.data', res.data)
    } catch (error) {
      notification["error"]({
        message: error.response.data,
      });
      dispatch(favouriteImageFail(error));
    }
  };
};
