import { Button,Select } from "antd";
import React, { useState } from "react";
import style from "./Header.module.css";
import { AudioOutlined } from "@ant-design/icons";

import { Input, Space } from "antd";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 19,
      color: "#1890ff",
    }}
  />
);
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
const Navigation = ({ open, setOpen, onSearch, handleChange }) => {
  return (
    <>
      <div className={style.Header}>
        {/* <Space direction="vertical"> */}
          <Search
            placeholder="Search Text"
            onChange={onSearch}
            style={{
              width: 200,
            }}
          />
        {/* </Space> */}
        {/* <select onChange={handleChange} style={{padding: "0.5%",marginRight:" 2%",borderRadius: "10px"}}>
        {items.map((ele, index) => {
          return (
            <option value={ele.key} key={index}>
              {ele.label}
            </option>
          );
        })}
      </select> */}
        <Select onChange={handleChange} defaultValue={0}>
          {items.map((ele, index) => {
            return (
              <Select.Option value={ele.key} key={index}>
                {ele.label}
              </Select.Option>
            );
          })}
        </Select>
        <Button type="primary" onClick={() => setOpen(true)}>
          Upload
        </Button>
      </div>
    </>
  );
};

export default Navigation;
