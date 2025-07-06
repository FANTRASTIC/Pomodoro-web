import React from 'react'
import styled from 'styled-components'
import CircularProgress from './CircularProgress/CircularProgress.jsx'

const Timer = () => {
  return (
    <TimerContainer>
        <CircularProgress />
    </TimerContainer>
  )
}

export default Timer

const TimerContainer = styled.div`
  background: conic-gradient(
    ${props => props.theme.colors.secondary},
    ${props => props.theme.colors.bg} 160deg,
    ${props => props.theme.secondary}
    );
  background: #e4e411;
  height: 42rem;
  width: 42rem;
  border-radius: 50%;
  margin: 2.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
