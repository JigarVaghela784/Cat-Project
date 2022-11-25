import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../../store/action/uploadAction";
import Loading from "../../Main/Loading/Loading";
import { useNavigate } from "react-router-dom";
const { Dragger } = Upload;
const UploadModal = ({ open, setOpen, onSubmitData, setDropDown }) => {
  const [lastImage, setlastImage] = useState([]);
  const apiKey =
    "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";

  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state?.upload.error);
  const handleChange = (event) => {
    const imageUniqueId = event.target.files[0].lastModified;
    setlastImage(lastImage?.push(imageUniqueId));
    console.log("imageUniqueId  ", imageUniqueId);
    setImage(event.target.files[0]);
    console.log("image1234", image);
    // dispatch(uploadImage(image));
    // onUploadImage(image);
  };
  console.log("lastImage", lastImage);
  const handleClick = async () => {
    await dispatch(uploadImage(image));
    setDropDown(0);
    setOpen(false);
  };

  const loading = useSelector((state) => state.upload.loading);
  let nmodal = null;
  if (loading) {
    console.log("loading1234", loading);
    nmodal = <Loading />;
  } else {
    nmodal = <input type="file" onChange={handleChange} />;
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
        {nmodal}
        {/* <button onClick={handleClick}>Upload</button> */}
      </Modal>
    </>
  );
};
export default UploadModal;
