import React, { createContext, useState, useContext, useEffect, act } from 'react'

export const StateContext = createContext();





// This is the StateProvider component that will provide the state to the rest of the app
const StateProvider = ({children}) => {
  const [workTime, setWorkTime] = useState(25 * 60); // 25 minutes in seconds
  const[shortBreakTime, setShortBreakTime] = useState(5 * 60); // 5 minutes in seconds
  const[longBreakTime, setLongBreakTime] = useState(30 * 60); // 15 minutes in seconds

  const[initTime, setInitTime] = useState(0); // Initial time for work session

  const [activeTag, setActiveTag] = useState(0);
  const [progress, setProgress] = useState(50);
  const[time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    switch(activeTag) {
      case 0:
        setTime(workTime);
        setInitTime(workTime);
        break;
        case 1:
          setTime(shortBreakTime);
          setInitTime(shortBreakTime);
          break;
          case 2:
            setTime(longBreakTime);
            setInitTime(longBreakTime);
            break;
          default:
            break;
    }

  },[activeTag, workTime, shortBreakTime, longBreakTime]);

  return <StateContext.Provider 
  value={{activeTag, setActiveTag, progress, setProgress, time, setTime, isRunning, setIsRunning, initTime, setInitTime, workTime, setWorkTime, shortBreakTime, setShortBreakTime, longBreakTime, setLongBreakTime}}
  >{children}</StateContext.Provider>
}

export default StateProvider

