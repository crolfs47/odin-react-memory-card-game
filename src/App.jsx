import "./App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Scoreboard />
        <Gameboard />
      </div>
    </>
  );
};

export default App;
