import { useState } from "react";
import Game_Play from "./Components/Game_Play";
import StartGame from "./Components/StartGame";

const App = () => {
  const [isGamestarted, setisGamestarted] = useState(true);

  const togglegameplay = () => {
    setisGamestarted((prev) => !prev);
  };
  return (
    <>{isGamestarted ? <Game_Play toggle={togglegameplay} /> : <StartGame />}</>
  );
};

export default App;
