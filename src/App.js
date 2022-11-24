import logo from "./logo.svg";
import "./App.css";
import Cat_Image from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Favourite from "./components/Main/Favourite/Favourite";
import Like from "./components/Main/Like/Like";
import Unfavourite from "./components/Main/Unfavourite/Unfavourite";
import { useEffect, useState } from "react";
import Navigation from "./components/Header/Header";
import { useSelector } from "react-redux";

function App() {
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(0);
  const [filterTxt, setFilterTxt] = useState("");
  const [allFavImage, setAllFavImage] = useState();
  const [allUnFavImage, setAllUnFavImage] = useState();
  const ImageData = useSelector((state) => state.allImage.data);
  const favImgData = useSelector((state) => state.allFavImage.data);

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
  let favImage = [];
  let unFavImage = [];
  useEffect(() => {
    ImageData?.filter((el) => {
      favImgData?.find((elem) => {
        if (elem.id === el.id) {
          favImage.push(el);
          setAllFavImage(favImage);
        }
      });
    });
  }, [favImgData]);
  // useEffect(() => {
  //   allFavImage?.filter((el) => {
  //       ImageData?.find((ele) => {
  //         if (ele.id !== el.id) {
  //           console.log("elem", ele.id,el.id);
  //           unFavImage.push(el);
  //           setAllUnFavImage(unFavImage);
  //         }
  //       });
  //     });
  // }, [allFavImage]);
  // console.log("allFavImage", allFavImage);
  // console.log("allUnFavImage", allUnFavImage);
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
        return <Favourite allFavImage={allFavImage} />;
      case 2:
        return <Unfavourite ImageData={ImageData} allFavImage={allFavImage} />;
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
