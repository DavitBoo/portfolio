import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  h3 {
    font-size: 1.7rem;
    font-weight: 700;
  }

  .technologies {
    display: flex;
    gap: 0.5rem;
  }

  i {
    font-size: 1.7rem;
  }

  p {
    font-size: 1.2rem;
  }

  a {
    color: var(--color-naranja-vibrante);
    font-size: 1.2rem;
  }

  a:hover {
    color: var(--color-text);
  }
`;

export default function ProjectLeft() {
  return (
    <StyledDiv>
      <h3>Twitter Clone</h3>
      <div className="technologies">
        <i className="firebase devicon-firebase-plain"></i>
        <i className="react devicon-react-original"></i>
        <i className="typescript devicon-typescript-plain"></i>
      </div>

      <p>
        La idea era hacer un clone de twitter que tuviese las funcionalidades
        principales de la red social: escribir y publicar posts, seguir a gente
        y que te sigan, editar tu perfil, dar al like a post de los demaa... con
        intención poner en práctica casi todo lo aprendido hasta ahora en
        conjunto. Sobre la marcha se me fueron ocurriendo algunas cosas que
        podía añadirle, y este es el resultado.
      </p>
      <a href="">Ver sitio</a>
    </StyledDiv>
  );
}
