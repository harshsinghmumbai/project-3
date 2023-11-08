import { useState } from "react";
import Game_page1 from "./Components/Game_Play";

const App = () => {
  const [isGamestarted, setisGamestarted] = useState(flase);
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <Game_page1 />
      </main>
    </>
  );
};

export default App;
