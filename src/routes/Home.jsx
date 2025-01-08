import React from 'react';
import { Title, HomeContainer } from '../components/HomeStyle';
import { GridWrapper } from '../components/LayoutStyle';

const Home = () => {
  return (
    <GridWrapper>
      <HomeContainer>
        <Title>Home</Title>
      </HomeContainer>
    </GridWrapper>
  );
};

export default Home;
