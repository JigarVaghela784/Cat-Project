import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../../store/action/uploadAction";
const { Dragger } = Upload;
const UploadModal = ({ open, setOpen, onSubmitData}) => {

  const apiKey =
    "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";

  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state?.upload.error);
  const handleChange = (event) => {
    console.log("event.target.file", event.target.files[0]);
    setImage(event.target.files[0]);
    console.log("image1234", image);
    // dispatch(uploadImage(image));
    // onUploadImage(image);
  };
let uploadImage;
  const handleClick = async() =>{
    dispatch(uploadImage(image));
    // onSubmitData()
  } 

  return (
    <>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() =>onSubmitData()}
        onCancel={() => setOpen(false)}
        width={750}
      >
        <input type="file" onChange={handleChange} />
        <button onClick={handleClick}>Upload</button>
      </Modal>
    </>
  );
};
export default UploadModal;
