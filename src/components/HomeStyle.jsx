import styled from 'styled-components';


export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: start;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start;
  text-align: left;
  padding: 20px;
  color: white;
  border-radius: 8px;
`;

export const Title = styled.h1`
  display: flex;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin-right: 35px;
  text-align: right;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;
