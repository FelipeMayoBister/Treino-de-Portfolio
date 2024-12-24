import { Outlet } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import MainContainer from './components/MainContainer';
import Navbar from './components/NavBar';
import { GridWrapper, HomeContainer } from './components/HomeStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <GridWrapper>
        <MainContainer>
          <h1>Felipe</h1>
          <h2>FullStack Beginner</h2>
          <Navbar />
        </MainContainer>
        <HomeContainer>
          <Outlet />
        </HomeContainer>
      </GridWrapper>
    </>
  );
}

export default App;