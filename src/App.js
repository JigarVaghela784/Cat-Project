import "./App.css";
import Main from "./components/Main/Main";
import Favourite from "./components/Main/Favourite/Favourite";
import Like from "./components/Main/Like/Like";
import Unfavourite from "./components/Main/Unfavourite/Unfavourite";
import { useEffect, useReducer, useState } from "react";
import Navigation from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import UploadModal from "./components/Header/Upload/UploadModal";
import {
  fetchImage,
  fetchFavouriteImage,
  fetchLikeImage,
} from "./store/action/action";
// import { fetchFavouriteImage } from "./store/action/action";
// import { fetchLikeImage } from "./store/action/allLikeAction";

function App() {
  const [allImage, setAllImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(0);
  const [filterTxt, setFilterTxt] = useState("");
  const [allFavImage, setAllFavImage] = useState([]);
  const [isImage, setIsImage] = useState(false);
  const imageData = useSelector((state) => state);
  const favImgData = useSelector((state) => state.favData);
  const dispatch = useDispatch();
  useEffect(() => {
    const allData = async () => {
      await dispatch(fetchImage());
      await dispatch(fetchFavouriteImage());
      await dispatch(fetchLikeImage());
      setIsImage(true);
    };
    allData();
  }, []);

  useEffect(() => {
    console.log("imageData.fetchData", imageData.fetchData);
    // allImage.push(imageData.fetchData)
    setAllImage(imageData?.fetchData);
  }, [imageData.fetchData]);

  useEffect(() => {
    allImage?.map((element, index) => {
      imageData.fetchFavData?.map((ele) => {
        if (ele.image_id === element.id) {
          allImage[index].favourite= ele;
        }
      });
    });
  }, [imageData.fetchFavData])


  var filteredFavData = [];
  const handleChange = (value) => {
    setDropDown(value);
    setFilterTxt("");
  };
  const onSearch = (e) => {
    let val = e.target.value;
    setFilterTxt(val);
  };
  // useEffect(() => {
  //   ImageData?.filter((el) => {
  //     return favImgData?.find((elem) => {
  //       if (elem.id === el.id) {
  //         allFavImage.push(el);
  //         setAllFavImage(allFavImage);
  //       }
  //     });
  //   });
  // }, [favImgData, ImageData]);
  const handleDropDown = () => {
    switch (dropDown) {
      case 0:
        return (
          <Main
            // open={open}
            // setOpen={setOpen}
            filterTxt={filterTxt}
            // filteredData={filteredData}
            allImage={allImage}
          />
        );
      case 1:
        return (
          <Favourite
            allImage={allImage}
            filterTxt={filterTxt}
            filteredData={filteredFavData}
            setAllFavImage={setAllFavImage}
          />
        );
      case 2:
        return (
          <Unfavourite
            ImageData={ImageData}
            filterTxt={filterTxt}
            allFavImage={allFavImage}
          />
        );
      default:
        <Main />;
    }
  };

  // filteredFavData = allFavImage?.filter((element) => {
  //   return element.id?.toLowerCase().includes(filterTxt?.toLowerCase());
  // });

  return (
    <div className="App">
      <Navigation
        handleChange={handleChange}
        open={open}
        setOpen={setOpen}
        onSearch={onSearch}
      />
      {handleDropDown()}
      <UploadModal
        open={open}
        setOpen={setOpen}
        setDropDown={setDropDown}
        // forceUpdate={forceUpdate}
      />
    </div>
  );
}

export default App;
