import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWindowClose } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';
import {useContext} from 'react';
import {StateContext} from '../StateProvider';

const ModalContainer = ({ isOpen, onClose }) => {
  const {workTime, setWorkTime, shortBreakTime, setShortBreakTime, longBreakTime, setLongBreakTime } = React.useContext(StateContext);

  return (
    <Container
      initial={{ y: '-100vh', scale: 0.5 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ y: '-100vh' }}>
      <ModalContent
        initial={{ y: '-100vh', scale: 0.5 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: '-100vh' }}
      >
        <ModalHeader>
          <ModalTitle >
          Settings</ModalTitle>
          
          <ModalCloseButton onClick={onClose}>
            <FaWindowClose fontSize={'3rem'} />
          </ModalCloseButton>

        </ModalHeader>
        <ModalBody>
          <Formik initialValues={{ work: workTime/60, short: shortBreakTime/60, long: longBreakTime/60 }}
           onSubmit={(values) => { 
            setWorkTime(values.work*60);
            setShortBreakTime(values.short*60);
            setLongBreakTime(values.long*60);
           }}>
            <Form>
              <InputWrapper>
                <FormControl>
                  <label htmlFor="work">Work (minutes)</label>
                  <Field name = "work" min = "1" max = "60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="short">Short Break(minutes)</label>
                  <Field name = "short" min = "1" max = "60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="long">Long Break (minutes)</label>
                  <Field name = "long" min = "1" max = "60" />
                </FormControl>
              </InputWrapper>
              <ApplyButton type="submit"
                onMouseOver={(e) => e.target.style.backgroundColor = 'darkgreen'} 
                onMouseOut={(e) => e.target.style.backgroundColor = 'green'}
              >Apply</ApplyButton>
            </Form>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Container>
  )
}

export default ModalContainer


const ApplyButton = styled.button`
  float: right;
  height: 4rem;
  width: 10rem;
  border-radius: 3rem;
  background-color: green;
  color: white;
  font-size: 2rem;
  margin-right: 2rem;
  
  cursor: pointer;
  
  
`


const Container = styled.div`
  position: absolute;
  height: 50rem;
  width: 70rem;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3rem;
  display: grid;
  place-items: center;
  z-index: 10;
`
const ModalContent = styled(motion.div)`
  width: 58rem;
  height: 50rem;
  background-color: white;
  border-radius: 3rem;
  color: black;
  
`

const ModalHeader = styled.div`
  padding-left: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
                    
`

const ModalTitle = styled.h3`
  float: left;
  font-size: 4rem;
  margin-right: auto; 
  color: black;    
  
  width: 100%;    
  height:100%;
`
const ModalBody = styled.div`
  
`

const ModalCloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  border-radius: 7px;
  
  cursor: pointer;
  :hover{
  color: red;
  background-color: aliceblue;
  
  }
                   
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;
  
`

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  
  label {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  input {
    padding: 0.5rem;
    font-size: 1.6rem;
    border-radius: 5px;
    border: 1px solid #bd2929;
    width: 20rem;
  }
`