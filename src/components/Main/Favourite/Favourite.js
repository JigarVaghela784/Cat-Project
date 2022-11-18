import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Favourite = ({ element }) => {
  console.log("element", element);
  const [isHeart, setIsHeart] = useState(false);

  const [favouritesData, setFavouritesData] = useState();
  const onFavouriteData = async () => {
    setIsHeart(true);
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.post(
        "https://api.thecatapi.com/v1/favourites",
        {
          image_id: element.id,
        }
      );
      setFavouritesData(response);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  console.log("response:", favouritesData);
  const onUnFavouriteData = async () => {
    setIsHeart(false);
    let favourite_id = favouritesData.data.id;
    console.log("favorite_id", favourite_id);
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.delete(
        ` https://api.thecatapi.com/v1/favourites/${favourite_id}`
      );
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      {isHeart ? (
        <HeartFilled  style={{
          fontSize: "20px",
          padding: "7px",
          borderRadius: "50px",
          color: "#fff",
        }} onClick={onUnFavouriteData} />
      ) : (
        <HeartFilled  style={{
          fontSize: "20px",
          padding: "7px",
          borderRadius: "50px",
          color: "#f44336",
        }}  onClick={onFavouriteData} />
      )}
    </div>
  );
};

export default Favourite;
