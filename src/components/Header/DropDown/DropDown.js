import React from "react";
import style from "./DropDown.module.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <a href="https://www.antgroup.com">Favourite Image</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">Unfavourite Image</a>,
    key: "1",
  },
  {
    label: "Liked Image",
    key: "3",
  },
  {
    label: "UnLiked Image",
    key: "4",
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
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Click me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropDown;
