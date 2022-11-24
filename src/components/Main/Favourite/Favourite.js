import React, { useEffect, useState } from "react";
import ImageCard from "../ImageCard";
import style from "../Cat_image.module.css";
import Spinner from "../Spinner";

const Favourite = ({ allFavImage }) => {
  return (
    <div>
      <div className={style.ImgDiv}>
        {allFavImage?.map((el) => {
          console.log("el", el);
          return <ImageCard key={el?.id} element={el} />;
        })}
      </div>
    </div>
  );
};

export default Favourite;
