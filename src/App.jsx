import { useState } from "react";
 import Game_Play from './Components/Game_Play'

const App = () => {
  // const [isGamestarted, setisGamestarted] = useState(flase);
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <Game_Play />
      </main>
    </>
  );
};

export default App;
