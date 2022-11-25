import axios from "axios";
import * as actionType from "./actionType";

export const fetchLikeImageStart = () => {
  return {
    type: actionType.FETCH_LIKE_IMAGE_START,
  };
};

export const fetchLikeImageSuccess = (data) => {
  return {
    type: actionType.FETCH_LIKE_IMAGE_SUCCESS,
    data,
  };
};

export const fetchLikeImageFail = (error) => {
  return {
    type: actionType.FETCH_LIKE_IMAGE_SUCCESS,
    error,
  };
};

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
      const mapped=res.data.map(like=>{
        return{
            id:like.image.id,
            url:like.image.url,
            like,
        }
    })
      dispatch(fetchLikeImageSuccess(res.data));
    } catch (error) {
      console.log("error", error);
      dispatch(fetchLikeImageFail(error));
    }
  };
};
