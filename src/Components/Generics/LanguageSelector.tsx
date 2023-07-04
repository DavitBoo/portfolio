import React from "react";
import styled from "styled-components";

const Switcher = styled.div`
  .language-switcher {
    display: inline-block;
    margin-bottom: 10px;
  }

  label {
    margin-right: 5px;
  }

  select {
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export default function LanguageSelector() {
  const handleChange = (event: any) => {
    const newLanguage = event.target.value;
    // Llama a tu función para cambiar el idioma
    // setLanguage(newLanguage);
  };

  return (
    <Switcher className="language-switcher">
      <label htmlFor="language-select">Language:</label>
      <select id="language-select" onChange={handleChange}>
        <option value="es-ES">Español</option>
        <option value="en-US">English</option>
      </select>
    </Switcher>
  );
}
