import React, { useEffect, useState } from "react";
import style from "../Cat_image.module.css";
import ImageCard from "../ImageCard";

const Unfavourite = ({ allImage, filterTxt }) => {
  let filteredUnfavData = [];
  const [data, setData] = useState([]);
  const [unfavAllData, setUnfavAllData] = useState();
  useEffect(() => {
    let data = [];
    allImage?.filter((el) => {
      if (el.favourite === undefined) {
        console.log("el", el);
        data?.push(el);
        console.log("data", data);
        setUnfavAllData( data);
      }
    });
  }, []);
  filteredUnfavData = unfavAllData?.filter((element) => {
    return element.id?.toLowerCase().includes(filterTxt?.toLowerCase());
  });

  const dataArray = filterTxt === "" ? unfavAllData : filteredUnfavData;
  console.log("favAllData@@unfav", dataArray);
  return (
    <div>
      <div className={style.ImgDiv}>
        {dataArray &&
          dataArray?.map((element) => {
            return <ImageCard key={element.id} element={element} />;
          })}
      </div>
    </div>
  );
};

export default Unfavourite;
