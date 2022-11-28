import React, { useEffect, useState } from "react";
import style from "../Cat_image.module.css";
import ImageCard from "../ImageCard";

const Unfavourite = ({ ImageData, allFavImage, filterTxt }) => {
  const [data, setData] = useState([]);
  let filteredUnfavData = [];
  useEffect(() => {
    const newEle = [...data];
    ImageData?.filter((element) => {
      if (allFavImage.length ===0) {
        newEle?.push(element);
      }
      return allFavImage?.filter((ele) => {
        if (element.id !== ele.id) {
          newEle?.push(element);
        }
      });
    });
    setData(newEle);
  }, [ImageData]);
  filteredUnfavData = data?.filter((element) => {
    return element.id?.toLowerCase().includes(filterTxt?.toLowerCase());
  });
  const dataArray = filterTxt === "" ? data : filteredUnfavData;
  return (
    <div>
      <div className={style.ImgDiv}>
        {dataArray?.map((element) => {
          console.log("data1234", element);
          return <ImageCard key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

export default Unfavourite;
