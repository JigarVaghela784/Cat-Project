// import { notification } from "antd";
// import axios from "axios";
// import { useState } from "react";
// import * as actionTypes from "./actionType";

// export const likeImageStart=()=>{
//     return{
//         type:actionTypes.LIKE_IMAGE_START
//     }
// }

// export const likeImageSuccess=(data)=>{
//     return{
//         type:actionTypes.LIKE_IMAGE_SUCCESS,
//         data:data
//     }
// }
// export const likeImageFail=(error)=>{
//     return{
//         type:actionTypes.LIKE_IMAGE_FAIL,
//         error:error
//     }
// }

// export const likeImage=(element,setAllLikeData)=>{
//     return async (dispatch)=>{
//         dispatch(likeImageStart())
//         try {
//             const payLoad = {
//               image_id: element.id,
//               sub_id: "user_123",
//               value: 1,
//             };
//             axios.defaults.headers.common["x-api-key"] =
//               "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
//             const response = await axios.post(
//               "https://api.thecatapi.com/v1/votes",
//               payLoad
//             );
//             notification["success"]({
//                 message: "Image Vote Successfully!!",
//               });
//               dispatch(likeImageSuccess(response.data))
//               setAllLikeData(response.data)
//           } catch (error) {
//             notification["error"]({
//                 message: error  
//               });
//             dispatch(likeImageFail(error))
//           }
//     }
// }