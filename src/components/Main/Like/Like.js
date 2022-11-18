import React, { useState } from "react";
import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import styles from "../ImageCard.module.css";
import axios from "axios";
const Like = ({ element }) => {
  const [isLike, setIsLiked] = useState(false);
  const [likeData, setLikeData] = useState(0);
  const onLikePost = async () => {
    console.log("element123456", element);
    setIsLiked(true);
    try {
      const payLoad = {
        image_id: element.id,
        sub_id: "user_1",
        value: likeData + 1,
      };
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.post(
        "https://api.thecatapi.com/v1/votes",
        payLoad
      );
      setLikeData(response.data.value);
      console.log("response", response.data.value);
    } catch (error) {
      console.log("error", error);
    }
  };
  const onUnLikePost = async () => {
    setIsLiked(false);
    try {
      const payLoad = {
        image_id: element.id,
        sub_id: "user_1",
        value: likeData - 1,
      };
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.post(
        "https://api.thecatapi.com/v1/votes",
        payLoad
      );
      setLikeData(response.data.value);
      console.log("response", response.data.value);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("likeData", likeData);
  return (
    <div className={styles.likeWrapper}>
      <div>
        {isLike ? (
          <LikeFilled
            style={{
              fontSize: "18px",
              padding: "5px",
              borderRadius: "50px",
              color: "#fff",
              backgroundColor: "#1890FF",
              transition: "0.2s",
            }}
            onClick={onUnLikePost}
          />
        ) : (
          <LikeFilled
            style={{
              fontSize: "18px",
              padding: "5px",
              borderRadius: "50px",
              color: "#fff",
              backgroundColor: "lightgrey",
            }}
            onClick={onLikePost}
          />
        )}
      </div>

      <div>{likeData}</div>
    </div>
  );
};

export default Like;
