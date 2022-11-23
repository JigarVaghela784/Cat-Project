import { notification } from "antd";
import axios from "axios";
import * as actionTypes from "./actionType";

export const uploadImageStart = () => {
  return {
    type: actionTypes.UPLOAD_IMAGE_START,
  };
};
export const uploadImageSuccess = (data) => {
  return {
    type: actionTypes.UPLOAD_IMAGE_SUCCESS,
    data: data,
  };
};
export const uploadImageFail = (error) => {
  return {
    type: actionTypes.UPLOAD_IMAGE_FAIL,
    error: error,
  };
};

export const uploadImage = (image) => {
  return async (dispatch) => {
    dispatch(uploadImageStart());
    const url = "https://api.thecatapi.com/v1/images/upload";
    let formData = new FormData();
    let info = JSON.parse(localStorage.getItem("uploadData")) || [];
    formData.append("file", image);
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      let response = await axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      notification["success"]({
        message: "Image Uploaded Successfully!!",
      });
      window.location.reload()
      notification["success"]({
        message: "Image Upload Successfully!!",
      });
      dispatch(uploadImageSuccess(response.data));
    } catch (error) {
      notification["error"]({
        message: error.response.data,
      });
      dispatch(uploadImageFail(error.response.data));
    }
  };
};
