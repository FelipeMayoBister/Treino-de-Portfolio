// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  padding: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;  
  color: white;  
  font-size: 1.5rem;
  margin: 10px 0;

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
