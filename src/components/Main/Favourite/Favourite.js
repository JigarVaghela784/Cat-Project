import React, { useEffect, useState } from "react";
import ImageCard from "../ImageCard";
import style from "../Cat_image.module.css";
import Spinner from "../Spinner";

const Favourite = ({ allImage, filteredFavData, filterTxt }) => {
  // const intersection = dataArray.filter((element) =>
  //   allFavImage.includes(element)
  // );
  // async function onImageUnfavourited(favouriteId)
  //   {
  //     console.log('favouriteId', favouriteId)
  //     setAllFavImage(dataArray.filter(image => image.favourite?.id !== favouriteId))
  //   }
  // console.log("intersection", intersection);
  const [favAllData, setFavAllData] = useState([])
  useEffect(() => {
    allImage?.filter(el=>{
      if(el.favourite){
        console.log('el', el)
        favAllData.push(el)
        setFavAllData(favAllData)
      }
    })
  }, [allImage])
  console.log('favAllData', favAllData)
  const dataArray = filterTxt === "" ? favAllData : filteredFavData;
  return (
    <div>
      <div className={style.ImgDiv}>
        {dataArray&&dataArray?.map((el) => {
          return <ImageCard key={el?.id} element={el} />;
        })}
      </div>
    </div>
  );
};

export default Favourite;
