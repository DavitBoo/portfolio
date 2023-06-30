import React, { useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import styled from "styled-components";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import DarkModeToggle from "./Components/Generics/DarkModeToggle";

const StyledDiv = styled.div`
  position: relative;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding: 0 5%;
  }

  .dark-mode-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <StyledDiv className="App">
      <div className="container">
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} handleChange={handleChange} />
      </div>
    </StyledDiv>
  );
}

export default App;
