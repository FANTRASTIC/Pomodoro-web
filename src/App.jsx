import styled from "styled-components";
import Tags from "./components/Tags/Tags.jsx";
import Timer from "./components/Timer/Timer.jsx";
import Modal from "./components/Modal/Modal.jsx";
import { useState } from "react";
import { FaCog } from "react-icons/fa";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  }
  const onOpen = () => {
    setIsOpen(true);
  }     


  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} />
    <Title>Pomodoro</Title>
    {/*Tags */}
    <Tags />
    {/*Timer */}
    <Timer />
    {/* Settings */}
    <CogIcon onClick={onOpen} >
      <FaCog />
    </CogIcon>
    </>
  )
}

export default App;
const Title = styled.h1`
  font-size: 2rem;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.primary} ;
  padding: 10px;
  border-radius: 5px;
`

const CogIcon = styled.div`
  position: absolute;
  left: 48.6%;
  bottom: 50%;
  cursor: pointer;
  font-size: 4rem;
  justify-content: center;
  :hover {
    color: ${props => props.theme.colors.primary};;
    
  }
  
  
  

`
