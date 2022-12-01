import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { Card } from "antd";
import styles from "./ImageCard.module.css";
import { useDispatch } from "react-redux";
import { HeartFilled, LikeFilled } from "@ant-design/icons";
import {
  favouriteImage,
  unfavouriteImage,
  unlikeImage,
  likeImage,
} from "../../store/action";
const { Meta } = Card;

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const ImageCard = ({ element, allImage }) => {
  const [isLike, setIsLiked] = useState(false);
  const [isHeart, setIsHeart] = useState(false);
  const [likeData, setLikeData] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (element?.favourite !== undefined) {
      setIsHeart(true);
    } else if (element?.favourite === undefined) {
      setIsHeart(false);
    }
    if (element.like !== undefined) {
      setIsLiked(true);
      setLikeData(1);
    } else if (element.like === undefined) {
      setIsLiked(false);
      setLikeData(0);
    }
  }, [element.favourite, element.like]);

  const onLikePost = async () => {
    setIsLiked(true);
    setLikeData(1);
    dispatch(likeImage(element));
  };
  const onUnLikePost = async () => {
    dispatch(unlikeImage(element));
    setIsLiked(false);
    setLikeData(0);
  };
  const onFavouriteData = async () => {
    setIsHeart(true);
    dispatch(favouriteImage(element));
  };

  const onUnFavouriteData = async () => {
    setIsHeart(false);
    dispatch(unfavouriteImage(element));
  };
  const options = {
    scale: 1,
    speed: 10000,
    max: 30,
  };
  return (
    <div>
      <Tilt
        style={{ boxShadow: "2px 10px 24px", borderRadius: "15px 15px" }}
        className="box"
        options={options}
      >
        <Card
          className={styles.mainContainer}
          cover={<img src={element.url} alt={element.id} />}
        >
          <div className={styles.favourite}>
            <div>
              {isHeart ? (
                <HeartFilled
                  style={{
                    fontSize: "20px",
                    padding: "7px",
                    borderRadius: "50px",
                    color: "#f44336",
                  }}
                  onClick={onUnFavouriteData}
                  id={element.id}
                />
              ) : (
                <HeartFilled
                  style={{
                    fontSize: "20px",
                    padding: "7px",
                    borderRadius: "50px",
                    color: "#ddd",
                  }}
                  onClick={onFavouriteData}
                  id={element.id}
                />
              )}
            </div>
          </div>
          <div className={styles.detailWrapper}>
            <div>{element.id}</div>
            <div>
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
            </div>
          </div>
        </Card>
      </Tilt>
    </div>
  );
};

export default ImageCard;
