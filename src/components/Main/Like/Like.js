import React, { useState } from "react";
import {
    LikeFilled,
    LikeOutlined,
  } from "@ant-design/icons";
const Like = () => {
  const [isLike, setIsLiked] = useState(false);

  return (
    <>
      {isLike ? (
        <LikeFilled onClick={() => setIsLiked(false)} />
      ) : (
        <LikeOutlined onClick={() => setIsLiked(true)} />
      )}
    </>
  );
};

export default Like;
