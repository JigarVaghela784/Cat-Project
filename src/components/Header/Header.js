import React from "react";
import DropDown from "./DropDown/DropDown";
import style from "./Header.module.css";
import Search from "./Search/Search";
import Data from "../newApi";
const Navigation = () => {
  return <div className={style.Header}>
  <Data/>
  </div>;
};

export default Navigation;
