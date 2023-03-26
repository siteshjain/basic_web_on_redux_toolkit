import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      
      <h1>Admin Table</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media screen and (max-width: 998px) {
    nav .menuItems li {
      margin: 0.6rem 5rem;
    }
  }
`;

export default Navbar;
