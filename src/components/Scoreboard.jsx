import "../styles/Scoreboard.css";

const Scoreboard = ({ currScore, highScore }) => {
  return (
    <>
      <div className="scoreboard-container">
        <div>Current Score: {currScore} </div>
        <div>High Score: {highScore} </div>
      </div>
    </>
  );
};

export default Scoreboard;
