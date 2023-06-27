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

export default function ProjectLeft({
  title,
  description,
  technologies,
  url,
}: any) {
  return (
    <StyledDiv>
      <h3>{title}</h3>
      <div className="technologies">
        <i className="firebase devicon-firebase-plain"></i>
        <i className="react devicon-react-original"></i>
        <i className="typescript devicon-typescript-plain"></i>
      </div>

      <p>{description}</p>
      <a href={url}>Ver sitio</a>
    </StyledDiv>
  );
}
