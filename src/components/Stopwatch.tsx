import { useEffect, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
const Stopwatch = () => {
 const [time, setTime] = useState<number>(0);
 const [timerOn, setTimerOn] = useState<boolean>(false);
 const [isFull, setIsFull] = useState<boolean>(false);
 const handle = useFullScreenHandle();

 useEffect(() => {
  let interval: any = null;

  if (timerOn) {
   interval = setInterval(() => {
    setTime((prevTime) => prevTime + 10);
   }, 10);
  } else if (!timerOn) {
   clearInterval(interval);
  }

  return () => clearInterval(interval);
 }, [timerOn]);
 const handleButton = () => {

  if (isFull) {
   setIsFull(false)
   handle.exit()
  } else {
   setIsFull(true)
   handle.enter()
  }
 }
 return (
  <FullScreen handle={handle} className="bg-black  h-screen  text-white px-5  md:px-10 lg:px-20 py-4">
   <button onClick={handleButton} className="text-[1vw] float-right border-b border-gray-400 text-gray-400">{`${isFull ? "Exit" : "Full Screen"}`}</button>

   <section className="flex w-full items-center  flex-col bg-black text-amber-50">
    <div id="display " className="text-[15vw] font-sans">
     <span className="">{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
     <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
     <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
     <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>

    <div className="space-x-10">
     {!timerOn && time === 0 && (
      <button onClick={() => setTimerOn(true)} className="bg-indigo-700 font-caveat shadow  rounded-md tracking-wide text-[3vw] px-6 ">Start</button>
     )}
     {timerOn && <button onClick={() => setTimerOn(false)} className="bg-indigo-700 font-caveat shadow  rounded-md tracking-wide text-[3vw] px-6 ">Stop</button>}
     {!timerOn && time > 0 && (
      <button onClick={() => setTime(0)} className="bg-indigo-700 rounded-md  font-caveat shadow  tracking-wide text-[3vw] px-6 ">Reset</button>
     )}
     {!timerOn && time > 0 && (
      <button onClick={() => setTimerOn(true)} className="bg-indigo-700  font-caveat shadow  rounded-md tracking-widest text-[3vw] px-6 ">Resume</button>
     )}
    </div>
   </ section>

  </FullScreen>
 )
}

export default Stopwatch