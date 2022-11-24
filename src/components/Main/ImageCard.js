import React, { useEffect, useRef, useState } from "react";
// import Cat_Image from "./Main";
import VanillaTilt from "vanilla-tilt";
import { Avatar, Card } from "antd";
// import Favourite from "./Favourite/Favourite";
import styles from "./ImageCard.module.css";
// import Like from "./Like/Like";
import { useDispatch, useSelector } from "react-redux";
import { favouriteImage } from "../../store/action/favouriteAction";
import { HeartFilled, LikeFilled } from "@ant-design/icons";
import { likeImage } from "../../store/action/likeAction";
import { unfavouriteImage } from "../../store/action/unfavouriteAction";
import { unlikeImage } from "../../store/action/unlikeAction";
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
  const [favouriteData, setFavouriteData] = useState([]);
  const [allLikeData, setAllLikeData] = useState([]);
  const dispatch = useDispatch();

  const favId = useSelector((state) => state.favourite.data);
  const unfavId = useSelector((state) => state.unfavourite.data);
  const likeStateData = useSelector((state) => state.like);
  const favImgData = useSelector((state) => state.allFavImage.data);
  const likeImgData = useSelector((state) => state.allLikeImage.data);

  const onLikePost = async () => {
    setIsLiked(true);
    dispatch(likeImage(element));
    setLikeData(likeData + 1);
  };
  const onUnLikePost = async () => {
    setIsLiked(false);
    dispatch(unlikeImage(likeStateData.data));
    setLikeData(likeData - 1);
  };
  const onFavouriteData = async () => {
    setIsHeart(true);
    dispatch(favouriteImage(element));
    setFavouriteData(favId);
  };
  const onUnFavouriteData = async () => {
    setIsHeart(false);
    dispatch(unfavouriteImage(favouriteData.id, element));
    setFavouriteData(element.favourite);
  };

  useEffect(() => {
    favImgData?.map((ele) => {
      if (ele.id === element.id) {
        setIsHeart(true);
        setFavouriteData(ele?.favourite?.id);
      }
    });

    likeImgData?.map((elem) => {
      if (elem.id === element.id) {
        setIsLiked(true);
        console.log("elemLike", elem);
      }
    });
  }, [favImgData, favouriteData, element.id, likeImgData]);

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
