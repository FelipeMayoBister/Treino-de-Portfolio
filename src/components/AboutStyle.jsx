import styled from 'styled-components';



export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  color: white;
  border-radius: 8px;
  max-height: 100vh;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
`;


export const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  color: white;
  font-size: 3rem;
  text-shadow: 4px 4px 6px black;
  margin-top: 19.3%;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

export const Paragraph = styled.p`
    font-size: 1.4rem;
    color: white;
    margin-top: 40%;
    line-height: 1.6; 
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-family: 'Oswald', sans-serif;
    text-align: justify;
    width: 100%;
    max-width: none; 
`;
