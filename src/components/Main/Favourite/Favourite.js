import React,{useState} from 'react'
import {
    HeartFilled,
    HeartOutlined,
  } from "@ant-design/icons";
const Favourite = () => {
    const [isHeart, setIsHeart] = useState(false);

  return (
    <div>    {isHeart ? (
        <HeartFilled  onClick={() => setIsHeart(false)} />
      ) : (
        <HeartOutlined onClick={() => setIsHeart(true)} />
      )}</div>
  )
}

export default Favourite