import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes/theme';
import { GlobalStyle } from './styles/GlobalStyles';

import { PacientsContextProvider } from './contexts/PacientsContext';
import { PageContainer } from './styles/Containers';
import { Home } from './pages/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      
      <PageContainer>
        <PacientsContextProvider>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
          </PacientsContextProvider>
      </PageContainer>

    </ThemeProvider>
  );
}

export default App;
