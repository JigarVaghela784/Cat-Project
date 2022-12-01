import React from "react";
import style from "./Cat_image.module.css";
import ImageCard from "./ImageCard";
import Spinner from "./Spinner";
const Main = ({ allImage, filterTxt, isImage }) => {
  var filteredData = [];
  filteredData = allImage?.filter((element) => {
    return element.id?.toLowerCase().includes(filterTxt?.toLowerCase());
  });
  const dataArray = filterTxt === "" ? allImage : filteredData;
  let newDataArray = <Spinner />;
  if (isImage) {
    newDataArray =
      dataArray?.length !== 0 ? (
        <div className={style.ImgDiv}>
          {dataArray &&
            dataArray?.map((el) => {
              return (
                <ImageCard allImage={allImage} key={el?.id} element={el} />
              );
            })}
        </div>
      ) : (
        <div>
          <h1 style={{ color: "red" }}>No Data Found!!</h1>
        </div>
      );
  }

  return <div>{newDataArray}</div>;
};
export default Main;
