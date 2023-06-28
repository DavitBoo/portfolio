import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import styled from "styled-components";

const StyledDiv = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`;

function App() {
  return (
    <StyledDiv className="App">
      <div className="container">
        <Header></Header>
        <About></About>
        <Projects></Projects>
      </div>
    </StyledDiv>
  );
}

export default App;
