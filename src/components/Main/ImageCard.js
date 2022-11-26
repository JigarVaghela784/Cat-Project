import React, { useEffect, useRef, useState } from "react";
// import Cat_Image from "./Main";
import VanillaTilt from "vanilla-tilt";
import {  Card, notification } from "antd";
// import Favourite from "./Favourite/Favourite";
import styles from "./ImageCard.module.css";
// import Like from "./Like/Like";
import { useDispatch, useSelector } from "react-redux";
import { favouriteImage } from "../../store/action/favouriteAction";
import { HeartFilled, LikeFilled } from "@ant-design/icons";
import { likeImage } from "../../store/action/likeAction";
import { unfavouriteImage } from "../../store/action/unfavouriteAction";
import { unlikeImage } from "../../store/action/unlikeAction";
import axios from "axios";
const { Meta } = Card;

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const ImageCard = ({ element }) => {
  const [isLike, setIsLiked] = useState(false);
  const [isHeart, setIsHeart] = useState(false);
  const [likeData, setLikeData] = useState(0);
  const [favouriteData, setFavouriteData] = useState(element.favourite);
  const [allLikeData, setAllLikeData] = useState(element.like);
  const dispatch = useDispatch();

  const favId = useSelector((state) => state.favourite.data);
  const unfavId = useSelector((state) => state.unfavourite.data);
  const likeStateData = useSelector((state) => state.like.data);
  const favImgData = useSelector((state) => state.allFavImage.data);
  const likeImgData = useSelector((state) => state.allLikeImage.data);

  const onLikePost = async () => {
    setIsLiked(true);
    try {
      const payLoad = {
        image_id: element.id,
        sub_id: "user_1234",
        value: 1,
      };
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const response = await axios.post(
        "https://api.thecatapi.com/v1/votes",
        payLoad
      );
      notification["success"]({
          message: "Image Vote Successfully!!",
        });
      setAllLikeData(response.data)
      setLikeData(response.data.value)
    } catch (error) {
      notification["error"]({
          message: error.response.data,
        });
      console.log("error", error);
    }
  };
  const onUnLikePost = async () => {
    setIsLiked(false);
    dispatch(unlikeImage(allLikeData?.id));
    setLikeData(likeData - 1);
  };
  const onFavouriteData = async () => {
    setIsHeart(true);
    try {
      axios.defaults.headers.common["x-api-key"] =
        "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
      const res = await axios.post("https://api.thecatapi.com/v1/favourites", {
        image_id: element.id,
      });
      notification["success"]({
        message: "Image Like Successfully!!",
      });
      console.log("res.data", res.data);
      setFavouriteData(res.data);
    } catch (error) {
      notification["error"]({
        message: error.response.data,
      });
    }
    console.log("favId", favouriteData);
  };
  const onUnFavouriteData = async () => {
    console.log("favouriteData.id", favouriteData.id);
    console.log("first");
    setIsHeart(false);
    dispatch(unfavouriteImage(favouriteData.id, element));
    setFavouriteData(element.favourite);
  };

  useEffect(() => {
    favImgData?.filter((ele) => {
      if (ele.id === element.id) {
        setIsHeart(true);
        setFavouriteData(ele.favourite);
      }
    });

    likeImgData?.map((elem) => {
      if (elem.image_id === element.id) {
        setIsLiked(true);
        setAllLikeData(elem)
        setLikeData(likeData + 1);
      }
    });
  }, [favImgData, element.id, likeImgData]);

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
