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
import { LanguageProvider } from "./Context/LanguageContext";
import LanguageSelector from "./Components/Generics/LanguageSelector";

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

  .language-switcher {
    position: fixed;
    top: 60px;
    right: 20px;
  }
`;

function App() {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const userLanguage = navigator.language;
  const [language, setLanguage] = useState(userLanguage);

  useEffect(() => {
    console.log(prefersDarkMode);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  // useEffect(() => {
  //   const handleLanguageChange = () => {
  //     const updatedLanguage = navigator.language;
  //     setLanguage(updatedLanguage);
  //   };

  //   window.addEventListener("languagechange", handleLanguageChange);

  //   return () => {
  //     window.removeEventListener("languagechange", handleLanguageChange);
  //   };
  // }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles></GlobalStyles>
      <StyledDiv className="App">
        <LanguageProvider language={language} setLanguage={setLanguage}>
          <div className="container">
            <Header></Header>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} handleChange={handleChange} />
            <LanguageSelector />
          </div>
        </LanguageProvider>
      </StyledDiv>
    </ThemeProvider>
  );
}

export default App;
