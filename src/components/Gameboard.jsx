import "../styles/Gameboard.css";
import { useEffect } from "react";

const Gameboard = ({
  catImages,
  updateCatImages,
  currScore,
  updateCurrScore,
  highScore,
  updateHighScore,
  gameOver,
  updateGameOver,
  winner,
  updateWinner,
}) => {
  const newGame = () => {
    updateCurrScore(0);
    updateGameOver(false);
    updateWinner(false);
  };

  useEffect(() => {
    const abortController = new AbortController(); // Added this as part of cleanup function to get rid of Strictmode issue in dev

    const fetchCats = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=12`,
          {
            headers: {
              "x-api-key":
                "live_YDushvk3CG1SOyCUOSkFfNaJiywR7pe4g52yztF29zgH6LwygNuBi9LKISe9OtyR",
            },
            signal: abortController.signal,
            mode: "cors",
          }
        );
        const catData = await response.json();
        const newArray = catData.map((cat) => ({
          id: cat.id,
          url: cat.url,
          clicked: false,
        }));
        updateCatImages(newArray);
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    if (gameOver === false) {
      fetchCats();
    }
    return () => abortController.abort();
  }, [gameOver]);

  // used Fisher Yates shuffle algorithm
  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const checkHighScore = (currScore) => {
    if (currScore > highScore) {
      updateHighScore(currScore);
    }
  };

  const checkWinner = (currScore) => {
    if (currScore === 12) {
      updateWinner(true);
    }
  };

  const handleClick = (clickedCat) => {
    if (
      clickedCat.clicked === false &&
      gameOver === false &&
      winner === false
    ) {
      clickedCat.clicked = true;
      const clickedCatImages = catImages.map((cat) => {
        if (cat.id === clickedCat.id) {
          return clickedCat;
        }
        return cat;
      });
      updateCurrScore(currScore + 1);
      checkHighScore(currScore + 1);
      checkWinner(currScore + 1);
      shuffleCards(clickedCatImages);
      updateCatImages(clickedCatImages);
    } else {
      updateGameOver(true);
    }
  };

  return (
    <>
      <div>
        <button id="new-game-button" onClick={newGame}>
          New Game
        </button>
      </div>
      <div className="card-container">
        {catImages.map((cat) => {
          return (
            <div className="card" key={cat.id} onClick={() => handleClick(cat)}>
              <img src={cat.url} alt={cat.id} key={cat.id} width="200" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gameboard;
