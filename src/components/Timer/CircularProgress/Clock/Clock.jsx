import React from 'react'
import styled from 'styled-components'
import { useState, useContext, useEffect } from 'react'
import { StateContext } from '../../../StateProvider';
  const Clock = () => {
    console.log('Clock component rendered');
  const{time, setTime, isRunning, setIsRunning, initTime} = useContext(StateContext);
  

  useEffect(()=>{
    console.log('useEffect called');
    if(isRunning && time>0){

      const interval = setInterval(() =>{
        setTime((time)=> time -1);
      }, 1000);
      return () => clearInterval(interval); 
      }
    }
  , [time, isRunning]);

  const toggleClock = () =>{
    console.log('toggleClock called');
    setIsRunning(!isRunning);
  }

  //Function to reset the timer
  const resetTime = () => {
    setTime(initTime);
    setIsRunning(false);
  }

  const getTime = (time) => {
    const min = Math.floor(time/60);
    const sec = time % 60;

      const formattedMin = min < 10 ? `0${min}` : min;
    const formattedSec = sec < 10 ? `0${sec}` : sec;
    return `${formattedMin}:${formattedSec}`;
    
  }

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick ={toggleClock}>{isRunning ? 'Pause' : 'Start'}</StartPauseButton>
      <ResetButton onClick={resetTime}>Reset</ResetButton>
    </ClockContainer>
  )
}

export default Clock

const ClockContainer = styled.div`
  display: grid;
  place-items: center;
`
const TimerText = styled.h1`
  font-size: 8rem;
`

const StartPauseButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border  : 2px solid #ffffff;
  padding: 1rem 2rem;
  font-size: 2rem;
  background-color: #ffffff;
  color: #000000;
  border-radius: 10px;
  margin-top:-5rem;
  margin-bottom: 1rem;
  &:hover {
    background-color: #f0f0f0;
  }
`
const ResetButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border  : 2px solid #ffffff;
  padding: 1rem 2rem;
  font-size: 2rem;
  background-color: #ffffff;
  color: #000000;
  border-radius: 10px;
  
  &:hover {
    background-color: #f0f0f0;
  }
`