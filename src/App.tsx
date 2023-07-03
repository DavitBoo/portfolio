import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import DarkModeToggle from "./Components/Generics/DarkModeToggle";
import { lightTheme, darkTheme } from "./Components/Themes";
import { GlobalStyles } from "./Components/GlobalStyles";

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
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    console.log(prefersDarkMode);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // const handleChange = (event) => {
    //   setDarkMode(event.matches);
    // };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <GlobalStyles></GlobalStyles>
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
    </ThemeProvider>
  );
}

export default App;
