import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "../Cat_image.module.css";
import ImageCard from "../ImageCard";
import { connect, useDispatch, useSelector } from "react-redux";
import Navigation from "../../Header/Header";
import { getAllFavouriteData } from "../../../store/action/favouriteAction";

const Favourite = ({ data }) => {
  console.log("data======================", data);
  const dispatch = useDispatch();
  const favData = useSelector((state) => state.favourite.data);
  console.log('favData', favData)
  useEffect(() => {
    dispatch(getAllFavouriteData());
  }, []);
  return (
    <div>
      <div className={style.ImgDiv}>
        {favData?.map((el) => {
          return (
            <ImageCard key={el.image.id} element={el.image} favData={favData} />
          );
        })}
      </div>
    </div>
  );
};

export default Favourite;
