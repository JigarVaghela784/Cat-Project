import React from "react";
import Cat_Image from "./Main";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
const ImageCard = ({ element }) => {
  console.log("element:", element);
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            src={element.url}
          />
        }
        // actions={[
        //   <SettingOutlined key="setting" />,
        //   <EditOutlined key="edit" />,
        //   <EllipsisOutlined key="ellipsis" />,
        // ]}
      >
        <Meta
        //   avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={element.id}
        //   description="This is the description"
        />
      </Card>
    </div>
  );
};

export default ImageCard;
