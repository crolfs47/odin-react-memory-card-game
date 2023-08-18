import "./App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import Cards from "./components/Cards";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Scoreboard />
        <Gameboard />
        <Cards />
      </div>
    </>
  );
};

export default App;
