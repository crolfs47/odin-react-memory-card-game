import "./App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Scoreboard />
        <Gameboard />
        <Card />
      </div>
    </>
  );
};

export default App;
