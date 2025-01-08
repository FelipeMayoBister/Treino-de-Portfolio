import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  max-height: 100vh;
  flex-direction: column;
  align-items: flex-start;  
  padding: 20px;
  font-family: 'Oswald', sans-serif;
`;

const StyledLink = styled(Link)`
  text-decoration: none;  
  color: white;  
  font-size: 1.5rem;
  margin: 10px 0;
  font-family: 'Oswald', sans-serif;

  &:hover {
    color: #000000;  
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="about">About</StyledLink>
    </NavbarContainer>
  );
};

export default Navbar;
