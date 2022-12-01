import React, { useEffect, useState } from "react";
import ImageCard from "../ImageCard";
import style from "../Cat_image.module.css";

const Favourite = ({ allImage, filterTxt }) => {
  var filteredFavData = [];
  const [favAllData, setFavAllData] = useState([]);
  useEffect(() => {
    let data = [];
    allImage?.filter((el) => {
      if (el.favourite) {
        data?.push(el);
        setFavAllData(data);
      }
    });
  }, [allImage]);
  filteredFavData = favAllData?.filter((element) => {
    return element.id?.toLowerCase().includes(filterTxt?.toLowerCase());
  });
  const dataArray = filterTxt === "" ? favAllData : filteredFavData;
  return (
    <div>
      {dataArray.length !== 0 ? (
        <div className={style.ImgDiv}>
          {dataArray &&
            dataArray?.map((el) => {
              return <ImageCard key={el?.id} element={el} />;
            })}
        </div>
      ) : (
        <div>
          <h1 style={{color:"red"}}>No Favourite Data Found!!</h1>
        </div>
      )}
    </div>
  );
};

export default Favourite;
