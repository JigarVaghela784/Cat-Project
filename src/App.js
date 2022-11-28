import "./App.css";
import Main from "./components/Main/Main";
import Favourite from "./components/Main/Favourite/Favourite";
import Like from "./components/Main/Like/Like";
import Unfavourite from "./components/Main/Unfavourite/Unfavourite";
import { useEffect, useReducer, useState } from "react";
import Navigation from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import UploadModal from "./components/Header/Upload/UploadModal";
import { fetchImage } from "./store/action/allImageAction";
import { fetchFavouriteImage } from "./store/action/allFavouriteAction";
import { fetchLikeImage } from "./store/action/allLikeAction";
function App() {
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(0);
  // const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [filterTxt, setFilterTxt] = useState("");
  const [allFavImage, setAllFavImage] = useState([]);
  const ImageData = useSelector((state) => state.allImage.data);
  const favImgData = useSelector((state) => state.allFavImage.data);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  useEffect(async () => {
    await dispatch(fetchImage());
     dispatch(fetchFavouriteImage());
     dispatch(fetchLikeImage());
  }, []);

  var filteredData = [];
  var filteredFavData = [];
  const handleChange = (value) => {
    setDropDown(value);
  };
  const onSearch = (e) => {
    let val = e.target.value;
    setFilterTxt(val);
  };
  useEffect(() => {
    ImageData?.filter((el) => {
      return favImgData?.find((elem) => {
        if (elem.id === el.id) {
          allFavImage.push(el);
          setAllFavImage(allFavImage);
        }
      });
    });
  }, [favImgData, ImageData]);
  const handleDropDown = () => {
    switch (dropDown) {
      case 0:
        return (
          <Main
            open={open}
            setOpen={setOpen}
            filterTxt={filterTxt}
            filteredData={filteredData}
            setAllFavImage={setAllFavImage}
            allFavImage={allFavImage}
          />
        );
      case 1:
        return (
          <Favourite
            allFavImage={allFavImage}
            filterTxt={filterTxt}
            filteredData={filteredFavData}
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

  filteredData = ImageData?.filter((element) => {
    return element.id?.toLowerCase().includes(filterTxt?.toLowerCase());
  });
  filteredFavData = allFavImage?.filter((element) => {
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
