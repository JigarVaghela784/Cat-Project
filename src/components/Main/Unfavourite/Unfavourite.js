import React, { useEffect, useState } from "react";
import style from "../Cat_image.module.css";
import ImageCard from "../ImageCard";

const Unfavourite = ({ allImage, filterTxt }) => {
  let filteredUnfavData = [];
  const [unFavAllData, setUnFavAllData] = useState();
  useEffect(() => {
    let data = [];
    allImage?.filter((el) => {
      if (el.favourite === undefined) {
        console.log("el", el);
        data?.push(el);
        console.log("data", data);
        setUnFavAllData(data);
      }
    });
  }, [allImage]);
  filteredUnfavData = unFavAllData?.filter((element) => {
    return element.id?.toLowerCase().includes(filterTxt?.toLowerCase());
  });

  const dataArray = filterTxt === "" ? unFavAllData : filteredUnfavData;
  return (
    <div>
    {dataArray?.length !== 0 ? (
        <div className={style.ImgDiv}>
          {dataArray &&
            dataArray?.map((element) => {
              return <ImageCard key={element.id} element={element} />;
            })}
        </div>
       ) : ( 
        <div>
        <h1 style={{color:'red'}}>No Unfavourite Data Found!!</h1>
      </div>
        
     )}
    </div>
  );
};

export default Unfavourite;
