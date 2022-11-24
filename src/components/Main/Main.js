import axios from "axios";
import React, { useEffect, useState } from "react";
import DropDown from "../Header/DropDown/DropDown";
// import Search from "../Header/Search/SearchField";
// import Upload from "../Header/Upload/Upload";
import style from "./Cat_image.module.css";
import ImageCard from "./ImageCard";
import { Button } from "antd";
import UploadModal from "../Header/Upload/UploadModal.js";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchImage } from "../../store/action/allImageAction";
import Spinner from "./Spinner";
import { fetchFavouriteImage } from "../../store/action/allFavouriteAction";
import { fetchLikeImage } from "../../store/action/allLikeAction";
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
  const [isImage, setIsImage] = useState(false);
  const dispatch = useDispatch();
  const ImageData = useSelector((state) => state.allImage);
  const favImgData = useSelector((state) => state.allFavImage);
  const dataArray = filterTxt === "" ? ImageData.data : filteredData;
  const handleClick = () => {
    dispatch(fetchImage());
    setIsImage(true);
  };

  useEffect(() => {
    handleClick();
  }, []);
  useEffect(() => {
    if (isImage) {
      dispatch(fetchFavouriteImage());
      dispatch(fetchLikeImage());
    }
  }, [ImageData]);

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
      {open && <UploadModal open={open} setOpen={setOpen} />}
    </div>
  );
};
export default Main;
