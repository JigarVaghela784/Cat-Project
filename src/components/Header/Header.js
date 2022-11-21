import { Button } from "antd";
import React, { useState } from "react";
import DropDown from "./DropDown/DropDown";
import style from "./Header.module.css";
import Search from "./Search/SearchField";
// import Data from "../newApi";
const Navigation = ({open,setOpen,cat}) => {
  // return <div className={style.Header}>{/* <Data/> */}</div>;
  return (
    <div className={style.Header}>
      <Search cat={cat}/>
      <DropDown />
      <Button type="primary" onClick={()=>setOpen(true)}>
        Upload
      </Button>
      {/* <Button type="primary" onClick={handleClick}>
    Upload
  </Button> */}
      {/* <Upload clicked={handleClick} /> */}
    </div>
  );
};

export default Navigation;
