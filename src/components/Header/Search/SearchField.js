import React from 'react'
import style from "./Search.module.css";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import axios from 'axios';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
// const onSearch = (value) => console.log(value);
const SearchField = () => {

const onSearch=async()=>{
  const id='vzVaSkJ6Q' 
  try{
    const response=await axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${id}`)
    console.log('response', response)
  }catch(error){
    console.log('error', error)
  }
}

  return (
    <Space direction="vertical">
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
   
  </Space>
);

}

export default SearchField