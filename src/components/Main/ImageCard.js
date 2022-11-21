import React, { useEffect, useRef, useState } from "react";
import Cat_Image from "./Main";
import VanillaTilt from "vanilla-tilt";
import { Avatar, Card } from "antd";
// import Favourite from "./Favourite/Favourite";
import styles from "./ImageCard.module.css";
import Like from "./Like/Like";
import { useDispatch, useSelector } from "react-redux";
import {
  favouriteImage,
  unfavouriteImage,
} from "../../store/action/favouriteAction";
import { HeartFilled, LikeFilled } from "@ant-design/icons";
import { likeImage, unlikeImage } from "../../store/action/likeAction";
const { Meta } = Card;

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const ImageCard = ({ element}) => {
  const [isLike, setIsLiked] = useState(false);
  const [isHeart, setIsHeart] = useState(false);
  const [likeData, setLikeData] = useState(0);
  const [favourite, setFavourite] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.favourite.data);
  const lData = useSelector((state) => state.like.data);
  const favouriteData = useSelector((state) => state.favourite.data);
  const onLikePost = async () => {
    setIsLiked(true);
    dispatch(likeImage(element, likeData));
    setLikeData(lData)
  };
  console.log('likeData', likeData)
  const onUnLikePost = async () => {
    setIsLiked(false);
    dispatch(unlikeImage(element, likeData));
  };
    const onFavouriteData = async () => {
      setIsHeart(true);
      dispatch(favouriteImage(element));
    };

    const onUnFavouriteData = async () => {
      setIsHeart(false);
      let favourite_id = data?.data?.id;
      dispatch(unfavouriteImage(favourite_id));
    };
    console.log('lData', lData)

  // console.log("likeData", likeData);
  const options = {
    scale: 1,
    speed: 10000,
    max: 30,
  };
  return (
    <div>
      <Tilt
        style={{ boxShadow: "2px 10px 24px" }}
        className="box"
        options={options}
      >
        <Card
          className={styles.mainContainer}
          cover={<img src={element.url} />}
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
