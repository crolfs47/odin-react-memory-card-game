import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";

const App = () => {
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [catImages, setCatImages] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  return (
    <>
      <div>
        <Header />
        <Scoreboard
          catImages={catImages}
          currScore={currScore}
          highScore={highScore}
        />
        <Gameboard
          catImages={catImages}
          updateCatImages={(newCatImages) => setCatImages(newCatImages)}
          currScore={currScore}
          updateCurrScore={(newCurrScore) => setCurrScore(newCurrScore)}
          highScore={highScore}
          updateHighScore={(newHighScore) => setHighScore(newHighScore)}
          gameOver={gameOver}
          updateGameOver={(newGameOver) => setGameOver(newGameOver)}
        />
      </div>
    </>
  );
};

export default App;
