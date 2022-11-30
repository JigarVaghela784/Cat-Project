import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../../store/action/action";
import Loading from "../../Main/Loading/Loading";
import "./UploadModal.modual.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Main/Spinner";
const { Dragger } = Upload;
// const UploadModal = ({ open, setOpen, setDropDown, forceUpdate }) => {
  const UploadModal = ({ open, setOpen, setDropDown }) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleClick = async () => {
    // await dispatch(uploadImage(image, forceUpdate));
    await dispatch(uploadImage(image));
    setDropDown(0);
    setOpen(false);
  };
  // console.log('image', image)

  const loading = useSelector((state) => state.loading);
  let nmodal = null;
  if (loading) {
    nmodal = (
      <>
        <Spinner />
        Uploading A Cat Image...
      </>
    );
  } else {
    nmodal = (
      <>
        <CloudUploadOutlined style={{ fontSize: "50px", color: "#555" }} />
        Upload A Cat Image
        <input type="file" onChange={handleChange} />
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
