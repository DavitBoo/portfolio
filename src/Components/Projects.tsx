import React from "react";
import Project from "./Subcomponents/Project";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  max-width: 980px;
  flex-direction: column;

  h2 {
    font-size: 2.2rem;
    font-weight: 400;
  }

  p {
    font-size: 1.2rem;
  }
`;

export default function Projects() {
  return (
    <StyledDiv>
      <h2>Algunos proyectos</h2>
      <p>
        En diciembre de 2022, me di cuenta que había leído muchisimo, había
        hecho un mogollón de tutoriales y que había trabajo en algunas empresas
        en las que había tocado cosas que ya estaban hechas, pero no había hecho
        nada desde cero, así que me puse a ello.
      </p>
      <label htmlFor="">Filtra por tecnologías utilizadas:</label>
      <select name="select">
        <option value="value1">HTML</option>
        <option value="value2" selected>
          CSS
        </option>
        <option value="value3">JavaScript</option>
      </select>
      <Project />
      <Project />
    </StyledDiv>
  );
}
