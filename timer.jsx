import { useState, useEffect } from "react";
export default function App() {
    const [time, setTime] = useState(3);
    const [session, setSession] = useState(0);
    const [breaFlag, setBreakFlag] = useState(false);
    const [play, setPlay] = useState(false);

    function timerFinished(){
      setPlay(false)
      if(breaFlag){
        setTime(3)
      }else{
        setSession(session + 1);
        setTime(5)
      }
      setBreakFlag(!breaFlag)
    }
    const handleTimer = () => {
        setPlay(!play);
    };
    const resetTimer = () => {
        setTime(3);
    };    
    useEffect(()=>{
      if (play && time > 0) {
        let currentTime;
        const countDown = setInterval(() => {
            currentTime = time - 1;
            if (currentTime == 0) {
              timerFinished()
            } else {
                setTime(currentTime);
            }
        }, 1000);
        return () => clearInterval(countDown);
    }
    },[time, play])

    return (
        <div className="App">
            <h1>Pomodoro app</h1>
            <span>
                {String(time / 60)
                    .split(".")[0]
                    .padStart(2, "0")}
                :{String(time % 60).padStart(2, "0")}
            </span>
            <span>
              &nbsp; &nbsp;{breaFlag ? "Break Session" : "Work Session"}
            </span>
            <p>finished sessions: {session}</p>
            <button onClick={handleTimer}>{play ? "stop" : "start"}</button>
            <span>&nbsp;</span>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}
