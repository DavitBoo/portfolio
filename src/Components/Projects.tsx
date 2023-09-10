import React, { ChangeEvent, useState, useContext } from "react";
import Project from "./Subcomponents/Project";
import styled from "styled-components";

import projects from "../data/projects.ts";
import { LanguageContext } from "../Context/LanguageContext.tsx";

const StyledSection = styled.section`
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

const technologiesUsed = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JS",
  "React",
  "Typescript",
  "nodeJS",
  "Express",
  "mongoDB",
  "EJS",
  "Webpack",
  "Jest",
  "Firebase",
  "PHP",
  "WordPress",
];

export default function Projects() {
  const [technologiesChecked, setTechnologiesChecked] = useState<string[]>([]);

  const { language } = useContext(LanguageContext);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const technology = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      // Marcar checkbox
      setTechnologiesChecked((prevTechnologies) => [...prevTechnologies, technology]);
    } else {
      // Desmarcar checkbox
      setTechnologiesChecked((prevTechnologies) => prevTechnologies.filter((prevTech) => prevTech !== technology));
    }
  };

  return (
    <StyledSection>
      <h2>{language === "es-ES" ? "Algunos proyectos" : "Some of the projects"}</h2>
      <p>
        {language === "es-ES"
          ? "En diciembre de 2022, me di cuenta que había leído muchísimo, había hecho un mogollón de tutoriales y que había      trabajo en algunas empresas en las que había tocado cosas que ya estaban hechas, pero no había hecho nada desde         cero, así que me puse a ello."
          : "In December 2022, I realized that I had read a lot, done a ton of tutorials and had worked in a few companies where I had touched things that were already done, but I hadn't done anything from scratch, so I went for it."}
      </p>
      <div>
        <label htmlFor="">
          {language === "es-ES" ? "Filtra por tecnologías utilizadas:" : "Filter by technologies used:"}
        </label>
        <div className="filter">
          {technologiesUsed.map((technology) => (
            <label key={technology}>
              <input
                type="checkbox"
                name={technology}
                checked={technologiesChecked.includes(technology)}
                onChange={handleCheckboxChange}
              />
              <span>{technology}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="the-projects">
        {projects
          .filter((project) => {
            if (technologiesChecked.length === 0) {
              return true; // Renderizar todos los proyectos si technologiesChecked está vacío
            }
            return technologiesChecked.every((tech) => project.technologies.includes(tech));
          })
          .map((project, index) => (
            <Project key={index} project={project} />
          ))}
      </div>
    </StyledSection>
  );
}
