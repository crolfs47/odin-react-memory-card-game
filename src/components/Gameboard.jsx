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
}) => {
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
        updateGameOver(false);
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    fetchCats();
    return () => abortController.abort();
  }, [gameOver]);

  const checkHighScore = (currScore) => {
    if (currScore > highScore) {
      updateHighScore(currScore);
    }
  };

  const handleClick = (clickedCat) => {
    if (clickedCat.clicked === false) {
      clickedCat.clicked = true;
      updateCurrScore(currScore + 1);
      checkHighScore(currScore + 1); 
      const newCatImages = catImages.map((cat) => {
        if (cat.id === clickedCat.id) {
          return clickedCat;
        }
        return cat;
      });
      updateCatImages(newCatImages);
    } else {
      console.log("game over"); // need to add functions to restart game here
      updateCurrScore(0);
      updateGameOver(true);
    }
  };

  return (
    <>
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
