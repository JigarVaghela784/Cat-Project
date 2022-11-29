import React, { useEffect, useRef, useState } from "react";
// import Cat_Image from "./Main";
import VanillaTilt from "vanilla-tilt";
import { Card, notification } from "antd";
// import Favourite from "./Favourite/Favourite";
import styles from "./ImageCard.module.css";
// import Like from "./Like/Like";
import { useDispatch, useSelector } from "react-redux";
// import { favouriteImage } from "../../store/action/favouriteAction";
import { HeartFilled, LikeFilled } from "@ant-design/icons";
// import { likeImage } from "../../store/action/likeAction";
import {
  favouriteImage,
  unfavouriteImage,
  unlikeImage,
  likeImage,
} from "../../store/action/action";
// import { unlikeImage } from "../../store/action/unlikeAction";
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
  console.log("element@@@@$$", element);
  const [isLike, setIsLiked] = useState(false);
  const [isHeart, setIsHeart] = useState(false);
  const [likeData, setLikeData] = useState(0);
  const [favouriteData, setFavouriteData] = useState(element.favourite);
  const [allLikeData, setAllLikeData] = useState(element.like);
  const dispatch = useDispatch();
  console.log("");

  // const likeImgData = useSelector((state) => state.data);

  const onLikePost = async () => {
    setIsLiked(true);
    dispatch(likeImage(element, setAllLikeData));
    setLikeData(1);
  };
  const onUnLikePost = async () => {
    setIsLiked(false);
    dispatch(unlikeImage(allLikeData?.id));
    setLikeData(0);
  };
  const onFavouriteData = async () => {
    dispatch(favouriteImage(element, setFavouriteData));
    setIsHeart(true);
  };
  // useEffect(() => {
  //   allFavImage?.filter((el) => {
  //     console.log('el@@&&', el)
  //     // return favImgData?.find((elem) => {
  //     //   if (elem.id === el.id) {
  //     //     allFavImage.push(el);
  //     //     setAllFavImage(allFavImage);
  //     //   }
  //     // });
  //   });
  // }, [allFavImage]);

  const onUnFavouriteData = async () => {
    setIsHeart(false);
    dispatch(unfavouriteImage(favouriteData.id, element));
    setFavouriteData(element.favourite);
  };

  // useEffect(() => {
  //   allImage.filter((ele) => {
  //     if (ele.favourite!==undefined) {
  //       console.log("ele@@##$$##", ele);
  //       setIsHeart(true);
  //     }
  //   });
  // }, [allImage,element]);

  useEffect(() => {
  if (element?.favourite) {
    setIsHeart(true);
  }
    // likeImgData?.map((elem) => {
    //   if (elem.image_id === element.id) {
    //     setIsLiked(true);
    //     setAllLikeData(elem);
    //     setLikeData(likeData + 1);
    //   }
    // });
  }, [element.favourite]);

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
