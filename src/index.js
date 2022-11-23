import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import uploadReducer from "./store/reducer/uploadReducer";
import FavouriteReducer from "./store/reducer/favouriteReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import likeReducer from "./store/reducer/likeReducer";
import { BrowserRouter } from "react-router-dom";
import UnfavouriteReducer from "./store/reducer/unfavouriteReducer";
import UnlikeReducer from "./store/reducer/unlikeReducer";
import allFavImage from "./store/reducer/allFavouriteReducer";
import allImageReducer from "./store/reducer/allImageReducer";
import allLikeImage from "./store/reducer/allLikeReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  allImage: allImageReducer,
  upload: uploadReducer,
  favourite: FavouriteReducer,
  unfavourite: UnfavouriteReducer,
  unlike: UnlikeReducer,
  like: likeReducer,
  allFavImage: allFavImage,
  allLikeImage: allLikeImage,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
