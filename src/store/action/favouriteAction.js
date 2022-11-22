import { notification } from "antd";
import axios from "axios";
import * as actionTypes from "./actionType";

export const favouriteImageStart = () => {
  return {
    type: actionTypes.FAVOURITE_IMAGE_START,
  };
};
export const favouriteImageSuccess = (data, element) => {
  return {
    type: actionTypes.FAVOURITE_IMAGE_SUCCESS,
    data,
    element,
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
      dispatch(favouriteImageSuccess(response.data.id, element));
    } catch (error) {
      notification["error"]({
        message: error?.response?.data,
      });
      dispatch(favouriteImageFail(error));
    }
  };
};
export const unfavouriteImageStart = () => {
  return {
    type: actionTypes.UNFAVOURITE_IMAGE_START,
  };
};
export const unfavouriteImageSuccess = (data, favourite_id, element) => {
  return {
    type: actionTypes.UNFAVOURITE_IMAGE_SUCCESS,
    data: data,
    favourite_id: favourite_id,
    element,
  };
};
export const unfavouriteImageFail = (error) => {
  return {
    type: actionTypes.UNFAVOURITE_IMAGE_FAIL,
    error: error,
  };
};

export const unfavouriteImage = (favourite_id, element) => {
  // console.log("favourite_id", favourite_id);
  return async (dispatch) => {
    dispatch(unfavouriteImageStart());
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.delete(
        ` https://api.thecatapi.com/v1/favourites/${favourite_id}`,
        {
          image_id: element.id,
        }
      );
      notification["success"]({
        message: "Image Remove to Favorite Successfully!!",
      });
      dispatch(unfavouriteImageSuccess(response, favourite_id, element));
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

export const fetchFavouriteImageStart = () => {
  return {
    type: actionTypes.FETCH_FAVOURITE_IMAGE_START,
  };
};
export const fetchFavouriteImageSuccess = (fetchData) => {
  return {
    type: actionTypes.FETCH_FAVOURITE_IMAGE_SUCCESS,
    fetchData,
  };
};
export const fetchFavouriteImageFail = (error) => {
  return {
    type: actionTypes.FETCH_FAVOURITE_IMAGE_FAIL,
    error: error,
  };
};

export const getAllFavouriteData = () => {
  return async (dispatch) => {
    dispatch(fetchFavouriteImageStart());
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.get(
        "https://api.thecatapi.com/v1/favourites",
        { sub_id: "user_153" }
      );
      // setCat(cat?.concat(response.data))
      dispatch(fetchFavouriteImageSuccess(response.data));
    } catch (error) {
      dispatch(fetchFavouriteImageFail(error));
      console.log("error", error);
    }
  };
};
