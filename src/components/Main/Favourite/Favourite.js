// import React, { useEffect, useState } from "react";
// import { fetchFavouriteImage } from "../../../store/action/allFavouriteAction";
// import { useDispatch, useSelector } from "react-redux";
// import ImageCard from "../ImageCard";
// import style from "../Cat_image.module.css";
// import Spinner from "../Spinner";

// const Favourite = () => {
//   const [dataArray, setDataArray] = useState();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchFavouriteImage());
//     setDataArray(data.data);
//   }, [fetchFavouriteImage]);
//   let imageCard = null;

//   if (data.loading) {
//     imageCard = <Spinner />;
//   } else {
//     <div className={style.ImgDiv}>
//       {dataArray?.map((el) => {
//         console.log("el", el);
//         return <ImageCard key={el?.id} element={el} />;
//       })}
//     </div>;
//   }
//   return <div> {imageCard}</div>;
// };

// export default Favourite;
