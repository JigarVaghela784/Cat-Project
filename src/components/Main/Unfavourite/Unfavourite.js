import React, { useEffect, useState } from "react";
import style from "../Cat_image.module.css";
import ImageCard from "../ImageCard";

const Unfavourite = ({ ImageData, allFavImage }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newEle = [...data];
    ImageData?.filter((element) => {
      return allFavImage?.filter((ele) => {
        if (ele.id !== element.id) {
          console.log("element====11", element);
          console.log("newEle initially", newEle);
          newEle?.push(element);
          console.log("newEle after process", newEle);
        }
      });
    });
    console.log("newEle@@@", newEle);
    setData(newEle);
    console.log("data inside useeffect", data);
  }, [ImageData]);
  console.log("data@@@", data);

  return (
    <div>
      <div className={style.ImgDiv}>
        {data?.map((element) => {
            console.log("data1234", element);
          return <ImageCard key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

export default Unfavourite;
