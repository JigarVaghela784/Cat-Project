import axios from "axios";
import React, { useEffect, useState } from "react";
import DropDown from "../Header/DropDown/DropDown";
// import Search from "../Header/Search/SearchField";
// import Upload from "../Header/Upload/Upload";
import style from "./Cat_image.module.css";
import ImageCard from "./ImageCard";
import { Button } from "antd";
import UploadModal from "../Header/Upload/UploadModal.js";
import { connect } from "react-redux";
import Navigation from "../Header/Header";

import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const Cat_Image = () => {
  const [cat, setCat] = useState([]);
  const [open, setOpen] = useState(false);
  const [filterTxt, setFilterTxt] = useState("");
  var filteredData = [];

  console.log("cat", cat);

  const handleClick = async () => {
  axios
    .get("https://api.thecatapi.com/v1/images", {
      headers: {
        "x-api-key":
          "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM",
      },
    })
    .then((res) => {
      const newCat = cat?.concat(res.data);
      setCat(newCat);
    })
    .catch((error) => {
      console.log("error", error);
    });
  };
  useEffect(() => {
    let uploadedImage = JSON.parse(localStorage.getItem("uploadData"));
    console.log("uploadedImage ", uploadedImage);
    setCat(cat.concat(uploadedImage));
  }, []);
  const onSearch = (e) => {
    let val = e.target.value;
    setFilterTxt(val);
    console.log("set", val);
  };

  filteredData = cat?.filter((element) => {
    return element.id?.toLowerCase().includes(filterTxt?.toLowerCase());
  });
  const dataArray = filterTxt === "" ? cat : filteredData;
  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onChange={onSearch}
          style={{
            width: 200,
          }}
        />
      </Space>
      <Navigation open={open} setOpen={setOpen} />
      <div className={style.ImgDiv}>
        {dataArray?.map((el) => {
          return <ImageCard key={el?.id} element={el} />;
        })}
      </div>
      {open && <UploadModal open={open} setOpen={setOpen} />}
    </div>
  );
};
export default Cat_Image;
