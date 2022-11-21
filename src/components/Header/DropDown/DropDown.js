import React from "react";
import style from "./DropDown.module.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <a href="/">All</a>,
    key: "0",
  },
  {
    label: <a href="/favourite">Favourite Image</a>,
    key: "1",
  },
  {
    label: <a href="/unfavourite">Unfavourite Image</a>,
    key: "2",
  },
];
const DropDown = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <a href="/" onClick={(e) => e.preventDefault()}>
        <Space>
          All
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropDown;
