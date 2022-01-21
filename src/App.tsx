import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from "./styles/themes/theme";
import { GlobalStyle } from './styles/GlobalStyles';

import {  ContextProvider } from './contexts/PacientsContext';
import { Home } from './pages/Home';


function App() {


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <ContextProvider>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </ContextProvider>

    </ThemeProvider>
  );
}

export default App;
