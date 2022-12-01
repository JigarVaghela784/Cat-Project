import "./App.css";
import Main from "./components/Main/Main";
import Favourite from "./components/Main/Favourite/Favourite";
import Unfavourite from "./components/Main/Unfavourite/Unfavourite";
import { useEffect, useReducer, useState } from "react";
import Navigation from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import UploadModal from "./components/Header/Upload/UploadModal";
import {
  fetchImage,
  fetchFavouriteImage,
  fetchLikeImage,
} from "./store/action";
function App() {
  const [allImage, setAllImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(0);
  const [filterTxt, setFilterTxt] = useState("");
  const [isImage, setIsImage] = useState(false);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const imageData = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const allData = async () => {
      await dispatch(fetchImage());
      if (imageData.fetchData === null) {
        await dispatch(fetchFavouriteImage());
        await dispatch(fetchLikeImage());
      }
      setIsImage(true);
    };
    allData();
  // }, [ignored]);
  },[imageData.uploadData ])
  useEffect(() => {
    setAllImage(imageData?.fetchData);
  }, [imageData.fetchData, open]);

  useEffect(() => {
    allImage?.map((element, index) => {
      imageData.fetchFavData?.map((ele) => {
        if (ele.image_id === element.id) {
          allImage[index].favourite = ele;
        }
      });
    });
    allImage?.map((element, index) => {
      imageData.fetchLikeData?.map((ele) => {
        if (ele.image_id === element.id) {
          allImage[index].like = ele;
        }
      });
    });
  }, [imageData.fetchFavData, imageData.fetchLikeData]);
  useEffect(() => {
    allImage?.filter((element, index) => {
      if (element?.id === imageData?.favElData?.id) {
        allImage[index].favourite = imageData.favData;
        imageData.favData = null;
        imageData.favElData = null;
      }
    });
  }, [imageData, imageData.favElData]);

  useEffect(() => {
    allImage?.filter((element, index) => {
      if (element?.id === imageData.likeElData?.id) {
        allImage[index].like = imageData.likeData;
        imageData.likeData=null
        imageData.likeElData=null
      }
    });
  }, [imageData.likeElData, allImage]);
  // useEffect(() => {
  //   if(imageData.uploadData!==null){
  //     console.log('imageData.uploadData', imageData.uploadData)
  //     allImage.push(imageData.uploadData)
  //     setAllImage(allImage)
  //   }
  // }, [imageData.uploadData,allImage])
  
  const handleChange = (value) => {
    setDropDown(value);
    setFilterTxt("");
  };

  const onSearch = (e) => {
    let val = e.target.value;
    setFilterTxt(val);
  };
  const handleDropDown = () => {
    switch (dropDown) {
      case 0:
        return (
          <Main isImage={isImage} filterTxt={filterTxt} allImage={allImage} />
        );
      case 1:
        return <Favourite allImage={allImage} filterTxt={filterTxt} />;
      case 2:
        return <Unfavourite allImage={allImage} filterTxt={filterTxt} />;
      default:
        <Main />;
    }
  };

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
        allImage={allImage}
        setAllImage={setAllImage}
        open={open}
        setOpen={setOpen}
        setDropDown={setDropDown}
        // forceUpdate={forceUpdate}
      />
    </div>
  );
}

export default App;
