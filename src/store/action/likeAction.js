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
    console.log('data123456', data)
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

export const likeImage=(element,likeData)=>{
    console.log('likeDataReducer', likeData)
    return async (dispatch)=>{
        dispatch(likeImageStart)
        try {
            const payLoad = {
              image_id: element.id,
              sub_id: "user_1",
              value: likeData + 1,
            };
            axios.defaults.headers.common["x-api-key"] =
              "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
            const response = await axios.post(
              "https://api.thecatapi.com/v1/votes",
              payLoad
            );
            notification["success"]({
                message: "Image Liked Successfully!!",
              });
            dispatch(likeImageSuccess(response.data.value))
            console.log("response", response.data.value);
          } catch (error) {
            notification["error"]({
                message: error.response.data,
              });
            dispatch(likeImageFail(error))
            console.log("error", error);
          }
    }
}

export const unlikeImageStart=()=>{
    return{
        type:actionTypes.UNLIKE_IMAGE_START
    }
}

export const unlikeImageSucces=(data)=>{
    return{
        type:actionTypes.UNLIKE_IMAGE_START,
        data:data
    }
}
export const unlikeImageFail=(error)=>{
    return{
        type:actionTypes.UNLIKE_IMAGE_START,
        error:error
    }
}

export const unlikeImage=(element,likeData)=>{
    return async (dispatch)=>{
        dispatch(unlikeImageStart)
        try {
                const payLoad = {
        image_id: element.id,
        sub_id: "user_1",
        value: likeData - 1,
      };
            axios.defaults.headers.common["x-api-key"] =
              "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
            const response = await axios.post(
              "https://api.thecatapi.com/v1/votes",
              payLoad
            );
            notification["success"]({
                message: "Image Unliked Successfully!!",
              });
            dispatch(unlikeImageSucces(response.data.value))
            console.log("response", response.data.value);
          } catch (error) {
            notification["error"]({
                message: error.response.data,
              });
            dispatch(unlikeImageFail(error))
            console.log("error", error);
          }
    }
}