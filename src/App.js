import logo from "./logo.svg";
import "./App.css";
import Cat_Image from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Favourite from "./components/Main/Favourite/Favourite";
import Like from "./components/Main/Like/Like";
import Unfavourite from "./components/Main/Unfavourite/Unfavourite";
import { useState } from "react";

function App() {
  // const [isHeart, setIsHeart] = useState(false)

  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<Cat_Image />}/>
        <Route path="/favourite" element={<Favourite />}/>
        <Route path="/unfavourite" element={<Unfavourite />}/>
      </Routes>
     </div>
  );
}

export default App;
