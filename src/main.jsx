import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //these two be very important

import StateProvider from './components/StateProvider.jsx'


import { createGlobalStyle, ThemeProvider} from 'styled-components';
import App from './App.jsx'




const GlobalStyle = createGlobalStyle`
  html, body{
      background-color: ${(props) => props.theme.colors.bg};
      font-size: 62.5%;
  }
  
  body{
    font-size: 1.6rem;
    color: white;
  }


`

const theme = {
  colors: {
    primary: "#E67E22",
    secondary: "#16191b",
    teritary: "#008080",
    bg: "#3498DB"
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <StateProvider>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
  </StateProvider>
  </StrictMode>,
)
