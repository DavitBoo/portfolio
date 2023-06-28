import React from "react";
import Project from "./Subcomponents/Project";
import styled from "styled-components";

import projects from "../data/projects.ts";

const StyledDiv = styled.div`
  display: flex;
  max-width: 980px;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 2.2rem;
    font-weight: 400;
  }

  p {
    font-size: 1.2rem;
  }

  .the-projects {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .filter {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .filter label {
    display: flex;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
  }

  .filter input[type="checkbox"] {
    margin-right: 0.5rem;
  }

  .filter input[type="checkbox"]:checked + span {
    font-weight: bold;
    color: var(--color-naranja-vibrante);
  }
`;

const technologiesUsed = ["HTML", "CSS", "JS", "PHP", "React", "Typescript", "git", "Webpack", "Firebase", "WordPress"];

export default function Projects() {
  return (
    <StyledDiv>
      <h2>Algunos proyectos</h2>
      <p>
        En diciembre de 2022, me di cuenta que había leído muchisimo, había hecho un mogollón de tutoriales y que había
        trabajo en algunas empresas en las que había tocado cosas que ya estaban hechas, pero no había hecho nada desde
        cero, así que me puse a ello.
      </p>
      <div>
        <label htmlFor="">Filtra por tecnologías utilizadas:</label>
        <div className="filter">
          {technologiesUsed.map((technology) => (
            <label key={technology}>
              <input type="checkbox" name={technology} />
              <span>{technology}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="the-projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </StyledDiv>
  );
}
