const Game_page1 = () => {
  return (
    <>
      <div className="border-2 border-black w-[80%] h-80">
        <div className="w-3/6">
          <img
            src="./src/assets/dices 1.jpg"
            className="h-[19.8rem] w-full object-cover"
            alt="image"
          />
        </div>
        <div className="w-3/6">
          <p className="w-full">
            <h1 className="text-5xl font-bold">dice game</h1>
            <button className="bg-black text-white">Play now</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Game_page1;
