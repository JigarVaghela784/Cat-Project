import logo from "./logo.svg";
import "./App.css";
import Cat_Image from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Favourite from "./components/Main/Favourite/Favourite";
import Like from "./components/Main/Like/Like";
import Unfavourite from "./components/Main/Unfavourite/Unfavourite";
import { useState } from "react";
import Navigation from "./components/Header/Header";
import { useSelector } from "react-redux";

function App() {
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(0);
  const [filterTxt, setFilterTxt] = useState("");
  const ImageData = useSelector((state) => state.allImage.data);

  var filteredData = [];
  const handleChange = (e) => {
    console.log("e", +e.target.value);
    setDropDown(+e.target.value);
  };
  const onSearch = (e) => {
    let val = e.target.value;
    setFilterTxt(val);
    console.log("set", val);
  };
  const handleDropDown = () => {
    switch (dropDown) {
      case 0:
        return (
          <Cat_Image
            open={open}
            setOpen={setOpen}
            filterTxt={filterTxt}
            filteredData={filteredData}
          />
        );
      case 1:
        return <Favourite />;
      case 2:
        return <Unfavourite />;
      default:
        <Cat_Image />;
    }
  };

  filteredData = ImageData?.filter((element) => {
    return element.id?.toLowerCase().includes(filterTxt?.toLowerCase());
  });
  return (
    <div className="App">
      <Navigation
        handleChange={handleChange}
        open={open}
        setOpen={setOpen}
        onSearch={onSearch}
      />
      {handleDropDown()}
    </div>
  );
}

export default App;
