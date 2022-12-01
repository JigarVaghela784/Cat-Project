import { Button,Select } from "antd";
import React from "react";
import style from "./Header.module.css";
import { Input } from "antd";
const { Search } = Input;

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
const Navigation = ({ setOpen, onSearch, handleChange }) => {
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
