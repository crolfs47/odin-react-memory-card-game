import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Cards from "./components/Cards";

const App = () => {
  const [currScore, setCurrScore] = useState();
  const [highScore, setHighScore] = useState();
  const [catImages, setCatImages] = useState([]);

  return (
    <>
      <div>
        <Header />
        <Scoreboard />
        <Cards catImages={catImages} updateCatImages={(newCatImages) => setCatImages(newCatImages)}/>
      </div>
    </>
  );
};

export default App;
