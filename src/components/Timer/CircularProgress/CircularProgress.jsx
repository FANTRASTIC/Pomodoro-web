
import styled from 'styled-components'
import {useState, useContext, useEffect, use} from 'react'
import Clock from './Clock/Clock';
import { StateContext } from '../../StateProvider';


const CircularProgress = () => {
    //declaring a state variable to keep track of the active tag
    //useState is a hook that allows you to add state to a functional component
  const {progress, setProgress, time, initTime} = useContext(StateContext);

  useEffect(() => {
    setProgress(time/(initTime/100));
    //time is the current time left in seconds, initTime is the initial time in seconds
    //setProgress is a function that updates the progress state variable
  }, [setProgress, time]);


  return (
    <OuterCircle progress = {progress}>
        <InnerCircle >
          <Clock />
        </InnerCircle>

    </OuterCircle>
    
  )
}

export default CircularProgress

const OuterCircle = styled.div`
 
    height: 33rem;
    width: 33rem;
    border-radius: 50%;
    margin: 2.5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: #ffffff;
    background: conic-gradient(red ${({progress}) => progress}%, transparent ${({progress}) => progress}%);
`


const InnerCircle = styled.div`
    background: green;
    height: 30rem;
    width: 30rem;
    border-radius: 50%;
    margin: 2.5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: #ffffff;
`
