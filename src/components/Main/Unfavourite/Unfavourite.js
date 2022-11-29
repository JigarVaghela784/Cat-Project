import React, { useEffect, useState } from "react";
import style from "../Cat_image.module.css";
import ImageCard from "../ImageCard";

const Unfavourite = ({ allImage, filterTxt }) => {
  const [data, setData] = useState([]);
  let filteredUnfavData = [];

  useEffect(() => {
    allImage?.filter(el=>{
      if(el.favourite===undefined){
        data.push(el)
        setData(data)
      }
    })
  }, [allImage,data])
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
