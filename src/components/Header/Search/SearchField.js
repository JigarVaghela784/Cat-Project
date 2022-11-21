import React, { useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const SearchField = () => {
  // const [filterTxt, setFilterTxt] = useState("");
  // var filteredData = [];
  // const onSearch = (e) => {
  //   let val = e.target.value;
  //   setFilterTxt(val);
  //   console.log("set", val);
  // };
  // filteredData = cat?.filter((element) => {
  //   return element.id?.toLowerCase().includes(filterTxt?.toLowerCase());
  // });
  return (
    <div>
      {/* <input type="text" placeholder='search...' onChange={e=>setSearchImage(e.target.value)} /> */}
      {/* <Space direction="vertical">
        <Search
          placeholder="input search text"
          // onChange={onSearch}
          style={{
            width: 200,
          }}
        />
      </Space> */}
    </div>
  );
};
export default SearchField;
