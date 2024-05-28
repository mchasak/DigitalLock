import React, { useState } from 'react';
import './App.css';
import { Stack } from '@mui/material';
import Lock from './components/Lock';
import styled from '@emotion/styled';

type StyledAppPropsT = {
  value: string;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [color, setColor] = useState('grey');
  const [isLocked, setIsLocked] = useState(false);

  const handleButtonClick = (text: string) => {
    if (isLocked) return;
    if (inputValue.length === 4 && text !== '*' && text !== '#') {
      return
    }
    if (text === '*') {
      setInputValue((prevValue) => prevValue.slice(0, -1));
    } else if (text === '#') {
      setInputValue('');
    } else {
      setInputValue((prevValue) => prevValue + text);
    }
  }

if(inputValue.length === 4 && inputValue === '6979') {
  setInputValue('Welcome Home')
  setColor('green');
  setIsLocked(true);
  setTimeout(() => {
    setInputValue('');
    setColor('grey')
    setIsLocked(false)
  }, 8000)
} else if (inputValue.length === 4 && inputValue !== '6979') {
  setInputValue('Wrog Password')
  setColor('red')
  setIsLocked(true)
  setTimeout(() => {
    setInputValue('');
    setColor('grey')
    setIsLocked(false)
  }, 2000)
}

  return (
    <StyledApp value={inputValue}>
      <header></header>
      <Main>
        <Stack>
          <Lock inputValue={inputValue} color={color} isLocked={isLocked} onButtonClick={handleButtonClick} />
        </Stack>
      </Main>
    </StyledApp>
  );
}

const StyledApp = styled('div')<StyledAppPropsT>(({value}) => ({
  textAlign: 'center',
  backgroundColor: 'orange',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    position: 'absolute',
    content: '""',
    display: 'block',
    height: '100%',
    width: value === 'Welcome Home' ? '650px' : '10px',
    backgroundColor: '#000',
    left: '60%',
    top: 0,
  }
}))

const Main = styled('main')(() => ({
  width: '100%',
}))

export default App;