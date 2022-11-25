import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Cat_image.module.css";
import ImageCard from "./ImageCard";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const Main = ({ open, setOpen, filterTxt, filteredData }) => {
  const ImageData = useSelector((state) => state.allImage);
  const favImgData = useSelector((state) => state.allFavImage);
  const dataArray = filterTxt === "" ? ImageData.data : filteredData;

  let newDataArray = null;
  if (ImageData.loading) {
    newDataArray = <Spinner />;
  } else {
    newDataArray = (
      <div className={style.ImgDiv}>
        {dataArray?.map((el) => {
          return (
            <ImageCard
              key={el?.id}
              element={el}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div>
      {newDataArray}
      {/* {open && <UploadModal open={open} setOpen={setOpen} />} */}
    </div>
  );
};
export default Main;
