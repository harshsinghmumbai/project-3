const Game_Play = ({ toggle }) => {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <div className=" w-[80%] h-80 flex ">
          <div className="w-3/6">
            <img
              src="./src/assets/dices 1.jpg"
              className="h-[19.8rem] w-full object-cover"
              alt="image"
            />
          </div>
          <div className="w-3/6">
            <p className="w-full h-[9rem] mt-20 ">
              <h1 className="text-[4.5rem] font-bold uppercase">dice game</h1>
              <button
                onClick={toggle}
                className="bg-black text-white ml-[18rem] w-[6rem] h-[1.75rem] rounded-md text-sm hover:bg-gray-700"
              >
                Play now
              </button>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Game_Play;
