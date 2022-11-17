import axios from "axios";
import React, { useEffect, useState } from "react";

const Data = () => {
  const url = "https://api.thecatapi.com/v1/images/search?breed_ids=beng";
  const apiKey =
    "live_yb1lC6VB3xY0P1aLH36fW4kI5ApozP5NMZNoZ80e1Xai8lcMcpB9lZw0dDqUuKRM";
  const [apireq, setApireq] = useState();
  const requestApi = async () => {
    const header = {
      "Content-Type": "image/jpg",
      "x-api-key": apiKey,
    };

    const apiCall = await axios.post(url, { header });
    const jsonResult = await apiCall.json();
    setApireq(jsonResult);
    console.log("jsonResult", jsonResult);
  };
  useEffect(() => {
    requestApi();
  }, []);

  return <div>newApi</div>;
};

export default Data;
