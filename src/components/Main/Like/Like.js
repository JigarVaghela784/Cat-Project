import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "../Cat_image.module.css";
import ImageCard from "../ImageCard";
import { connect } from "react-redux";
import Navigation from "../../Header/Header";

const Like = ({ data }) => {
  console.log("data======================", data);
  const [cat, setCat] = useState([]);
  console.log("cat", cat);

  const LikeImage = async () => {
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.get(
        "https://api.thecatapi.com/v1/votes",{sub_id:"user_123"}
      );
      setCat(cat?.concat(response.data))
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    LikeImage();
  }, []);
  return (
    <div>
      <Navigation/>
      <div className={style.ImgDiv}>
        {cat?.map((el) => {
      console.log('cat13234564789', el.image)
          return <ImageCard key={el.image.id} element={el.image} />;
        })}
      </div>
    </div>
  );
};

export default Like;
