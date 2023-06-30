import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import styled from "styled-components";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

const StyledDiv = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding: 0 5%;
  }
`;

function App() {
  return (
    <StyledDiv className="App">
      <div className="container">
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </StyledDiv>
  );
}

export default App;
