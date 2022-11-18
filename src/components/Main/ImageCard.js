import React, { useEffect, useRef, useState } from "react";
import Cat_Image from "./Main";
import VanillaTilt from "vanilla-tilt";
import { Avatar, Card } from "antd";
import Favourite from "./Favourite/Favourite";
import styles from "./ImageCard.module.css";
import Like from "./Like/Like";
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
            <Favourite element={element} />
          </div>
          <div className={styles.detailWrapper}>
            <div>{element.id}</div>
            <div>
              <Like element={element} />
            </div>
          </div>
        </Card>
      </Tilt>
    </div>
  );
};

export default ImageCard;
