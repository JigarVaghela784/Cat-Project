import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../../store/action/uploadAction";
import Loading from "../../Main/Loading/Loading";
import "./UploadModal.modual.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Main/Spinner";
const { Dragger } = Upload;
const UploadModal = ({ open, setOpen, onSubmitData, setDropDown }) => {
  const apiKey =
    "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";

  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state?.upload.error);
  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleClick = async () => {
    await dispatch(uploadImage(image));
    setDropDown(0);
    setOpen(false);
  };

  const loading = useSelector((state) => state.upload.loading);
  let nmodal = null;
  if (loading) {
    console.log("loading1234", loading);
    nmodal = <Spinner />;
  } else {
    nmodal = (
      <>
        <CloudUploadOutlined style={{ fontSize: "50px", color: "#555" }} />
        Upload A Cat Image
        <input
          type="file"
          name="images"
          accept="image/jpg,image/jpeg,image/png,image/webp"
          onChange={handleChange}
        />
      </>
    );
  }

  return (
    <>
      <Modal
        title="Upload"
        centered
        open={open}
        onOk={() => handleClick()}
        onCancel={() => setOpen(false)}
        width={750}
      >
        <label>{nmodal}</label>
      </Modal>
    </>
  );
};
export default UploadModal;
