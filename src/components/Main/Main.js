import axios from "axios";
import React, { useEffect, useState } from "react";
import DropDown from "../Header/DropDown/DropDown";
import Search from "../Header/Search/SearchField";
// import Upload from "../Header/Upload/Upload";
import style from "./Cat_image.module.css";
import ImageCard from "./ImageCard";
import { Button } from "antd";
import UploadModal from "../Header/Upload/UploadModal.js";
import { connect } from "react-redux";

const Cat_Image = ({ data }) => {
  console.log("data", data);
  const [cat, setCat] = useState([]);
  const [open, setOpen] = useState(false);
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

  return (
    <div>
      <div className={style.Header}>
        <Search />
        <DropDown />
        <Button type="primary" onClick={() => setOpen(true)}>
          Upload
        </Button>
        <Button type="primary" onClick={handleClick}>
          Upload
        </Button>
        {/* <Upload clicked={handleClick} /> */}
      </div>
      <div className={style.ImgDiv}>
        {cat?.map((el) => {
          console.log("el", el);
          return (
            <ImageCard key={el.id} element={el} />
            // <img key={el.id} src={el.url} height={100} width={100} alt="cat" />
          );
        })}
      </div>
      {open && <UploadModal open={open} setOpen={setOpen} />}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state?.data,
  };
};
export default connect(mapStateToProps)(Cat_Image);
