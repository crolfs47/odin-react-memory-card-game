import "../styles/Header.css";

const Header = ({gameOver}) => {
  return (
    <>
      <div className="header-container">
        <h1>Memory Game</h1>
        <div>Get points by clicking on an image but don't click on any more than once!</div>
        {gameOver && (
          <h2 className="game-over">
            GAME OVER!
          </h2>
        )}
      </div>
    </>
  );
};

export default Header;
