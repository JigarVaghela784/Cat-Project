import { notification } from "antd";
import axios from "axios";
import { useState } from "react";
import * as actionTypes from "./actionType";

export const likeImageStart=()=>{
    return{
        type:actionTypes.LIKE_IMAGE_START
    }
}

export const likeImageSuccess=(data)=>{
    return{
        type:actionTypes.LIKE_IMAGE_SUCCESS,
        data:data
    }
}
export const likeImageFail=(error)=>{
    return{
        type:actionTypes.LIKE_IMAGE_FAIL,
        error:error
    }
}

export const likeImage=(element,)=>{
    return async (dispatch)=>{
        dispatch(likeImageStart())
        let value=0;
        try {
            const payLoad = {
              image_id: element.id,
              sub_id: "user_123",
              value: 1,
            };
            console.log('element.id', element.id)
            axios.defaults.headers.common["x-api-key"] =
              "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
            const response = await axios.post(
              "https://api.thecatapi.com/v1/votes",
              payLoad
            );
            notification["success"]({
                message: "Image Vote Successfully!!",
              });

            dispatch(likeImageSuccess(response.data))
            console.log("response", response.data);
          } catch (error) {
            notification["error"]({
                message: error.response.data,
              });
            dispatch(likeImageFail(error))
            console.log("error", error);
          }
    }
}