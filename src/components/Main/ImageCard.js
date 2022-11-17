import React, { useEffect, useRef, useState } from "react";
import Cat_Image from "./Main";
import VanillaTilt from "vanilla-tilt";

import { Avatar, Card } from "antd";
import Favourite from "./Favourite/Favourite";
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
      <Tilt className="box" options={options}>
        <Card style={{ width: 330 }} cover={<img src={element.url} />}>
      
          <Favourite/>
          <Like/>
          <Meta
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={element.id}
            // description="This is the description"
          />
        </Card>
      </Tilt>
    </div>
  );
};

export default ImageCard;
