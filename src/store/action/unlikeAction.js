import { notification } from "antd";
import axios from "axios";
import * as actionTypes from "./actionType";

export const unlikeImageStart = () => {
  return {
    type: actionTypes.UNLIKE_IMAGE_START,
  };
};

export const unlikeImageSuccess = (data) => {
  return {
    type: actionTypes.UNLIKE_IMAGE_SUCCESS,
    data: data,
  };
};
export const unlikeImageFail = (error) => {
  return {
    type: actionTypes.UNLIKE_IMAGE_FAIL,
    error: error,
  };
};

export const unlikeImage = (vote_id) => {
  return async (dispatch) => {
    dispatch(unlikeImageStart());
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.delete(
        `https://api.thecatapi.com/v1/votes/${vote_id}`);
      // notification["success"]({
      //   message: "Image Unliked Successfully!!",
      // });
      dispatch(unlikeImageSuccess(response.data.value));
      console.log("response", response);
    } catch (error) {
      // notification["error"]({
      //   message: error.response.data,
      // });
      dispatch(unlikeImageFail(error));
      console.log("error", error);
    }
  };
};
