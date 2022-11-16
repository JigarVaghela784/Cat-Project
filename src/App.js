import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Header/Header";
import Cat_Image from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Cat_Image />
    </div>
  );
}

export default App;
