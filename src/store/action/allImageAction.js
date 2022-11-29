// import { notification } from "antd";
// import axios from "axios";
// import * as actionType from "./actionType";

// export const fetchImageStart = () => {
//   return {
//     type: actionType.FETCH_IMAGE_START,
//   };
// };

// export const fetchImageSuccess = (data) => {
//   return {
//     type: actionType.FETCH_IMAGE_SUCCESS,
//     data,
//   };
// };

// export const fetchImageFail = (error) => {
//   return {
//     type: actionType.FETCH_IMAGE_FAIL,
//     error,
//   };
// };
// export const fetchImage = () => {
//   return async (dispatch) => {
//     dispatch(fetchImageStart());
//     try {
//       axios.defaults.headers.common["x-api-key"] =
//         "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
//       const response = await axios.get(
//         "https://api.thecatapi.com/v1/images?limit=5"
//       );
//         // notification["success"]({
//         //   message: "Fetch  Image Successfully!!",
//         // });
//       dispatch(fetchImageSuccess(response.data));
//     } catch (error) {
//       notification["error"]({
//         message: error.response.data,
//       });
//       dispatch(fetchImageFail(error));
//     }
//   };
// };
