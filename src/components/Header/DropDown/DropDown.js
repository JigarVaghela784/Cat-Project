import React, { useState } from "react";
import style from "./DropDown.module.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Cat_Image from "../../Main/Main";
import Favourite from "../../Main/Favourite/Favourite";
import Unfavourite from "../../Main/Unfavourite/Unfavourite";
const items = [
  {
    label: "All",
    key: 0,
  },
  {
    label: "Favourite Image",
    key: 1,
  },
  {
    label: "Unfavourite Image",
    key: 2,
  },
];

const DropDown = ({ handleChange }) => {
  return (
    <>
      <select onChange={handleChange}>
        {items.map((ele, index) => {
          return (
            <option value={ele.key} key={index}>
              {ele.label}
            </option>
          );
        })}
      </select>{" "}
    </>
  );
};

export default DropDown;
