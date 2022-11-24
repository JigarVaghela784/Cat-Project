import React, { useEffect, useState } from "react";
import style from "../Cat_image.module.css";
import ImageCard from "../ImageCard";

const Unfavourite = ({ ImageData, allFavImage }) => {
  const [data, setData] = useState([]);
  console.log("ImageData", ImageData);
  console.log("allFavImage", allFavImage);
  useEffect(() => {
    // const tempData = ImageData.find((ele) => ele.id === element.id);
  }, []);
  ImageData?.map((element) => {
    const data = allFavImage?.find((ele) => element.id === ele.id);
    console.log("data", data);
  });
  return (
    <div>
      <div className={style.ImgDiv}>
        {data?.map((el) => {
          console.log("el", el);
          return <ImageCard key={el?.id} element={el} />;
        })}
      </div>
    </div>
  );
};

export default Unfavourite;
