import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  justify-items: stretch;
  align-items: start;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box; 
`;