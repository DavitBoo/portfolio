import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../Context/LanguageContext";

const Switcher = styled.div`
  .language-switcher {
    display: inline-block;
    margin-bottom: 10px;
  }

  select {
    padding: 5px;
    font-size: 16px;
    border: 1px solid var(--color-gris-acero);
    border-radius: 4px;
  }
`;

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (event: any) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
  };

  return (
    <Switcher className="language-switcher">
      <select id="language-select" onChange={handleChange}>
        <option selected={language === "es-ES"} value="es-ES">
          Es
        </option>
        <option selected={language !== "es-ES"} value="en-US">
          En
        </option>
      </select>
    </Switcher>
  );
}
