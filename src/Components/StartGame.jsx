const StartGame = () => {
  return (
    <>
      <div className="mt-7 w-[95%] m-auto flex justify-between">
        {/* ---------------------Total Score-------------------- */}
        <div className="w-[7rem] h-[6rem] p-1">
          <h1 className="text-6xl font-[400] inline-block ml-6">0</h1>
          <p className="w-full text-base mt-1 ml-1">Total Score</p>
        </div>

        {/* ----------------------Select Number----------------------- */}
        <div className="w-[18rem] space-x-4 mt-2 ">
          <p className="border-[1px] border-black p-1 pl-[0.6rem]  w-8 h-8 inline-block">1</p>
          <p className="border-[1px] border-black p-1 pl-[0.6rem]  w-8 h-8 inline-block">2</p>
          <p className="border-[1px] border-black p-1 pl-[0.6rem]  w-8 h-8 inline-block">3</p>
          <p className="border-[1px] border-black p-1 pl-[0.6rem]  w-8 h-8 inline-block">4</p>
          <p className="border-[1px] border-black p-1 pl-[0.6rem]  w-8 h-8 inline-block">5</p>
          <p className="border-[1px] border-black p-1 pl-[0.6rem]  w-8 h-8 inline-block">6</p>

          <p className="flex justify-end mt-6 font-semibold mr-[1rem]">Select Number</p>
        </div>
      </div>

      <div className="">
        
      </div>
    </>
  );
};

export default StartGame;
