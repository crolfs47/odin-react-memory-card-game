import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Cards from "./components/Cards";

const App = () => {
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [catImages, setCatImages] = useState([]);

  // const checkHighScore = () => {
  //   if (currScore > highScore) {
  //     setHighScore(currScore)
  //   }
  // }

  return (
    <>
      <div>
        <Header />
        <Scoreboard
          catImages={catImages}
          currScore={currScore}
          highScore={highScore}
        />
        <Cards
          catImages={catImages}
          updateCatImages={(newCatImages) => setCatImages(newCatImages)}
          currScore={currScore}
          updateCurrScore={(newCurrScore) => setCurrScore(newCurrScore)}
          highScore={highScore}
          updateHighScore={(newHighScore) => setHighScore(newHighScore)}
        />
      </div>
    </>
  );
};

export default App;
