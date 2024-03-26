import react from "react";
import "./App.css";
import './TicTacToe.css';
import Butter from "./components/Butter";
import Counter from "./components/Counter";
import AlertBtn from "./components/AlertBtn";
import Greeting from "./components/Greeting";
import TicTacToe from "./components/TicTacToe";

function App() {
  return (
    <div>
      <Butter />
      <Counter />
      <AlertBtn />
      <Greeting isLoggedIn={true} />
      <TicTacToe />
    </div>
  );
}

export default App;
