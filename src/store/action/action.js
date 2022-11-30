import { notification } from "antd";
import axios from "axios";
import * as actionType from "./actionType";
export const fetchImageStart = () => {
  return {
    type: actionType.FETCH_IMAGE_START,
  };
};

export const fetchImageSuccess = (data) => {
  return {
    type: actionType.FETCH_IMAGE_SUCCESS,
    data: data,
  };
};

export const fetchImageFail = (error) => {
  return {
    type: actionType.FETCH_IMAGE_FAIL,
    error,
  };
};

////////////////////////////////////

export const fetchFavouriteImageStart = () => {
  return {
    type: actionType.FETCH_FAVOURITE_IMAGE_START,
  };
};

export const fetchFavouriteImageSuccess = (data) => {
  return {
    type: actionType.FETCH_FAVOURITE_IMAGE_SUCCESS,
    data: data,
  };
};

export const fetchFavouriteImageFail = (error) => {
  return {
    type: actionType.FETCH_FAVOURITE_IMAGE_SUCCESS,
    error,
  };
};

/////////////////////////////////////////////////

export const fetchLikeImageStart = () => {
  return {
    type: actionType.FETCH_LIKE_IMAGE_START,
  };
};

export const fetchLikeImageSuccess = (data) => {
  return {
    type: actionType.FETCH_LIKE_IMAGE_SUCCESS,
    data: data,
  };
};

export const fetchLikeImageFail = (error) => {
  return {
    type: actionType.FETCH_LIKE_IMAGE_SUCCESS,
    error,
  };
};

/////////////////////////////////////////////////

export const favouriteImageStart = () => {
  return {
    type: actionType.FAVOURITE_IMAGE_START,
  };
};

export const favouriteImageSuccess = (data, favData) => {
  return {
    type: actionType.FAVOURITE_IMAGE_SUCCESS,
    data: data,
    favData: favData,
  };
};

export const favouriteImageFail = (error) => {
  return {
    type: actionType.FAVOURITE_IMAGE_FAIL,
    error,
  };
};

/////////////////////////////////////////////////

export const likeImageStart = () => {
  return {
    type: actionType.LIKE_IMAGE_START,
  };
};

export const likeImageSuccess = (data) => {
  return {
    type: actionType.LIKE_IMAGE_SUCCESS,
    data: data,
  };
};
export const likeImageFail = (error) => {
  return {
    type: actionType.LIKE_IMAGE_FAIL,
    error: error,
  };
};

/////////////////////////////////////////////////

export const unfavouriteImageStart = () => {
  return {
    type: actionType.UNFAVOURITE_IMAGE_START,
  };
};

export const unfavouriteImageSuccess = (data, element) => {
  return {
    type: actionType.UNFAVOURITE_IMAGE_SUCCESS,
    data: data,
    unFavData: element,
  };
};

export const unfavouriteImageFail = (error) => {
  return {
    type: actionType.UNFAVOURITE_IMAGE_FAIL,
    error,
  };
};

/////////////////////////////////////////////////

export const unlikeImageStart = () => {
  return {
    type: actionType.UNLIKE_IMAGE_START,
  };
};

export const unlikeImageSuccess = (data) => {
  return {
    type: actionType.UNLIKE_IMAGE_SUCCESS,
    data: data,
  };
};
export const unlikeImageFail = (error) => {
  return {
    type: actionType.UNLIKE_IMAGE_FAIL,
    error: error,
  };
};

/////////////////////////////////////////////////

export const uploadImageStart = () => {
  return {
    type: actionType.UPLOAD_IMAGE_START,
  };
};
export const uploadImageSuccess = (data) => {
  return {
    type: actionType.UPLOAD_IMAGE_SUCCESS,
    data: data,
  };
};
export const uploadImageFail = (error) => {
  return {
    type: actionType.UPLOAD_IMAGE_FAIL,
    error: error,
  };
};

/////////////////////////////////////////////////

export const fetchImage = () => {
  return async (dispatch) => {
    dispatch(fetchImageStart());
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images?limit=5"
      );
      const mapped = response.data.map((image) => {
        return {
          id: image.id,
          original_filename: image.original_filename,
          url: image.url,
          created_at: image.created_at,
          favourite: image.favourite,
          like: image.like,
          image,
        };
      });
      // dispatch(fetchImageSuccess(response.data));
      dispatch(fetchImageSuccess(mapped));
    } catch (error) {
      notification["error"]({
        message: error.response.data,
      });
      dispatch(fetchImageFail(error));
    }
  };
};

/////////////////////////////////////////////////

export const fetchFavouriteImage = () => {
  return async (dispatch) => {
    dispatch(fetchFavouriteImageStart());
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const res = await axios.get(
        "https://api.thecatapi.com/v1/favourites?order=DESC"
      );
      // const mapped = res.data.map((favourite) => {
      //   return {
      //     id: favourite.image.id,
      //     url: favourite.image.url,
      //     favourite,
      //   };
      // });

      dispatch(fetchFavouriteImageSuccess(res.data));
      // dispatch(fetchFavouriteImageSuccess(mapped));
    } catch (error) {
      dispatch(fetchFavouriteImageFail(error));
    }
  };
};

/////////////////////////////////////////////////

export const fetchLikeImage = () => {
  return async (dispatch) => {
    const payLoad = {
      sub_id: "user_123",
      value: 1,
    };
    dispatch(fetchLikeImageStart());
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const res = await axios.get(
        "https://api.thecatapi.com/v1/votes?order=DESC",
        {
          body: payLoad,
        }
      );

      dispatch(fetchLikeImageSuccess(res.data));
    } catch (error) {
      dispatch(fetchLikeImageFail(error));
    }
  };
};

/////////////////////////////////////////////////

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
      dispatch(favouriteImageSuccess(res.data, element));
      // setAllFavImage(res.data);
      console.log("element@@&&##", element);
    } catch (error) {
      notification["error"]({
        message: error.response.data,
      });
      dispatch(favouriteImageFail(error));
    }
  };
};

/////////////////////////////////////////////////

export const likeImage = (element, setLikeData) => {
  return async (dispatch) => {
    dispatch(likeImageStart());
    try {
      const payLoad = {
        image_id: element.id,
        sub_id: "user_123",
        value: 1,
      };
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.post(
        "https://api.thecatapi.com/v1/votes",
        payLoad
      );
      notification["success"]({
        message: "Image Vote Successfully!!",
      });
      dispatch(likeImageSuccess(response.data));
      // setAllLikeData(response.data);
      setLikeData(response.data.value);
    } catch (error) {
      notification["error"]({
        message: error.response,
      });
      dispatch(likeImageFail(error));
    }
  };
};

/////////////////////////////////////////////////

export const unfavouriteImage = (element) => {
  console.log("element@@!!@@", element.favourite.id);
  return async (dispatch) => {
    dispatch(unfavouriteImageStart());
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const res = await axios.delete(
        `https://api.thecatapi.com/v1/favourites/${element.favourite.id}`
      );
      notification["success"]({
        message: "Unfavourite!!",
      });
      element.favourite = undefined;
      dispatch(unfavouriteImageSuccess(res.data, element));
      console.log("element@#!!!", element);
    } catch (error) {
      notification["error"]({
        message: error.response,
      });
      dispatch(unfavouriteImageFail());
    }
  };
};

/////////////////////////////////////////////////

export const unlikeImage = (element, setLikeData) => {
  return async (dispatch) => {
    const payLoad = {
      image_id: element.id,
      sub_id: "user_123",
      value: 0,
    };
    dispatch(unlikeImageStart());
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.delete(
        `https://api.thecatapi.com/v1/votes/${element.like.id}`,
        payLoad
      );
      notification["success"]({
        message: "Image Unvote Successfully!!",
      });
      dispatch(unlikeImageSuccess(response.data));
      setLikeData(payLoad.value);
      // console.log("response.data.value", response.data);
    } catch (error) {
      notification["error"]({
        message: error.response,
      });
      dispatch(unlikeImageFail(error));
    }
  };
};

/////////////////////////////////////////////////

export const uploadImage = (image) => {
  return async (dispatch) => {
    dispatch(uploadImageStart());
    const url = "https://api.thecatapi.com/v1/images/upload";
    let formData = new FormData();
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
      dispatch(uploadImageSuccess(response.data));
      // forceUpdate();
      console.log("responseData", response.data);
    } catch (error) {
      notification["error"]({
        message: error,
      });
      dispatch(uploadImageFail(error));
    }
  };
};
