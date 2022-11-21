import { notification } from "antd";
import axios from "axios";
import * as actionTypes from "./actionType";

export const favouriteImageStart = () => {
  return {
    type: actionTypes.FAVOURITE_IMAGE_START,
  };
};
export const favouriteImageSuccess = (data) => {
  return {
    type: actionTypes.FAVOURITE_IMAGE_SUCCESS,
    data: data,
  };
};
export const favouriteImageFail = (error) => {
  return {
    type: actionTypes.FAVOURITE_IMAGE_FAIL,
    error: error,
  };
};

export const favouriteImage = (element) => {
  return async (dispatch) => {
    dispatch(favouriteImageStart());
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.post(
        "https://api.thecatapi.com/v1/favourites",
        {
          image_id: element.id,
        }
      );
      notification["success"]({
        message: "Image Add Favorite Successfully!!",
      });
      dispatch(favouriteImageSuccess(response));
      console.log("response123456", response);
      // setFavouritesData(response);
    } catch (error) {
      notification["error"]({
        message: error.response.data,
      });
      dispatch(favouriteImageFail(error));
      console.log("error", error.message);
    }
  };
};
export const unfavouriteImageStart = () => {
  return {
    type: actionTypes.UNFAVOURITE_IMAGE_START,
  };
};
export const unfavouriteImageSuccess = (data, favourite_id) => {
  return {
    type: actionTypes.UNFAVOURITE_IMAGE_SUCCESS,
    data: data,
    favourite_id: favourite_id,
  };
};
export const unfavouriteImageFail = (error) => {
  return {
    type: actionTypes.UNFAVOURITE_IMAGE_FAIL,
    error: error,
  };
};

export const unfavouriteImage = (favourite_id) => {
  return async (dispatch) => {
    dispatch(unfavouriteImageStart());
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.delete(
        ` https://api.thecatapi.com/v1/favourites/${favourite_id}`
      );
      notification["success"]({
        message: "Image Remove to Favorite Successfully!!",
      });
      dispatch(unfavouriteImageSuccess(response, favourite_id));
      console.log("response", response);
    } catch (error) {
      notification["error"]({
        message: error.response.data,
      });
      dispatch(unfavouriteImageFail(error));
      console.log("error", error);
    }
  };
};
