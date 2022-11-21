import React, { useState } from "react";
import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import styles from "../ImageCard.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { likeImage, unlikeImage } from "../../../store/action/likeAction";
const Like = ({ element }) => {
  const [isLike, setIsLiked] = useState(false);
  const [likeData, setLikeData] = useState(0);
  const dispatch= useDispatch()
  const onLikePost = async () => {
    console.log("element123456", element);
    setIsLiked(true);
    dispatch(likeImage(element,likeData))
  };
  const onUnLikePost = async () => {
    setIsLiked(false);
    dispatch(unlikeImage(element,likeData))
   };
  // console.log("likeData", likeData);
  return (
    "Asdasdasdd"
    // <div className={styles.likeWrapper}>
    //   <div>
    //     {isLike ? (
    //       <LikeFilled
    //         style={{
    //           fontSize: "18px",
    //           padding: "5px",
    //           borderRadius: "50px",
    //           color: "#fff",
    //           backgroundColor: "#1890FF",
    //           transition: "0.2s",
    //         }}
    //         onClick={onUnLikePost}
    //       />
    //     ) : (
    //       <LikeFilled
    //         style={{
    //           fontSize: "18px",
    //           padding: "5px",
    //           borderRadius: "50px",
    //           color: "#fff",
    //           backgroundColor: "lightgrey",
    //         }}
    //         onClick={onLikePost}
    //       />
    //     )}
    //   </div>

    //   <div>{likeData}</div>
    // </div>
  );
};

export default Like;
