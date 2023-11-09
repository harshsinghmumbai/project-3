const StartGame = () => {
  return (
    <>
      <div className="border-2 border-black mt-7 w-[95%] m-auto flex justify-between">

        {/* ---------------------Total Score-------------------- */}
        <div className="w-[7rem] h-[6rem] p-1">
          <h1 className="text-6xl font-[400] inline-block ml-6">0</h1>
          <p className="w-full text-base mt-1 ml-1">Total Score</p>
        </div>

        {/* ----------------------Select Number----------------------- */}
        <div className="border-2 border-black h-full w-28">

        </div>
      </div>
    </>
  );
};

export default StartGame;
