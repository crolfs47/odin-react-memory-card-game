import "../styles/Header.css";

const Header = ({ gameOver, winner }) => {
  return (
    <>
      <div className="header-container">
        <h1>Memory Game - CATS Edition</h1>
        <div>
          Get points by clicking on an image but don't click on any more than
          once!
        </div>
        {gameOver && (
          <h2 className="game-over">
            YOU ALREADY CLICKED ON THAT CAT! GAME OVER!
          </h2>
        )}
        {winner && <h2 className="game-over">YOU WIN!</h2>}
      </div>
    </>
  );
};

export default Header;
