import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
const UploadModal = ({ open, setOpen }) => {
  // const url = "https://api.thecatapi.com/v1/images/upload";
  const apiKey =
    "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
  // const [apireq, setApireq] = useState();
  // const requestApi = async () => {
  //   const header = {
  //     "Content-Type": "application.json",
  //     "x-api-key": apiKey,
  //   };

  //   const apiCall = await axios.post(url, { header });
  //   const jsonResult = await apiCall.json();
  //   setApireq(jsonResult);
  //   console.log("jsonResult", jsonResult);
  // };
  // useEffect(() => {
  //   requestApi();
  // }, []);

  // const props = {
  //   name: "file",
  //   multiple: true,
  //   action: "https://api.thecatapi.com/v1/images/upload ",
  //   onChange(info) {
  //     console.log("info", info);
  //     const { status } = info.file;
  //     if (status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully.`);
  //     } else if (status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  //   onDrop(e) {
  //     console.log("Dropped files", e.dataTransfer.files);
  //   },
  // };

  const [file, setFile] = useState();
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleClick = async () => {
    const url = "https://my-burger-app-59a08-default-rtdb.firebaseio.com/";
    const formData = new FormData();
    formData.append("file", file, file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "x-api-key": apiKey,
      },
    };
    await axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={750}
      >
        {/* <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger> */}
        <input type="file" onChange={handleChange} />
        <button onClick={handleClick}>Upload File</button>
      </Modal>
    </>
  );
};
export default UploadModal;
