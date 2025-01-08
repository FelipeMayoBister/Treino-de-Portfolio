import { Outlet } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import MainContainer from './components/MainContainer';
import { TitleH1, TitleH2 } from './components/TitlesStyle';
import Navbar from './components/NavBar';
import { HomeContainer } from './components/HomeStyle';
import { GridWrapper } from './components/LayoutStyle';
import githubLogo from './assets/github-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';
import { ImageRow, Img } from './components/ImagesStyle';


function App() {
  return (
    <>
      <GlobalStyle />
      <GridWrapper>
        <MainContainer>
        <TitleH1>Felipe de Mayo Bisterço</TitleH1> {}
        <TitleH2>FullStack Beginner</TitleH2>  {}
          .<Navbar />
          
          <ImageRow>  {}
            <a href="https://github.com/FelipeMayoBister" target="_blank" rel="noopener noreferrer">
              <Img src={githubLogo} alt="GitHub Logo" />  {}
            </a>
            <a href="https://www.linkedin.com/in/felipe-de-mayo/" target="_blank" rel="noopener noreferrer">
              <Img src={linkedinLogo} alt="LinkedIn Logo" />  {}
            </a>
          </ImageRow>
        </MainContainer>

        <HomeContainer>
          <Outlet />
        </HomeContainer>
      </GridWrapper>
    </>
  );
}

export default App;