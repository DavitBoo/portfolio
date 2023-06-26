import React from "react";
import Project from "./Subcomponents/Project";

export default function Projects() {
  return (
    <div>
      <h2>Algunos proyectos</h2>
      <p>
        En diciembre de 2022, me di cuenta que había leído muchisimo, había
        hecho un mogollón de tutoriales y que había trabajo en algunas empresas
        en las que había tocado cosas que ya estaban hechas, pero quitando
        alguna cosa que había hecho con WordPress no tenía nada más hecho desde
        cero, así que me puse a ello.
      </p>
      <Project />
    </div>
  );
}
