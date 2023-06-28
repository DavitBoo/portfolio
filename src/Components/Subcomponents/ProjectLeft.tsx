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

export default function ProjectLeft({ title, description, technologies, url }: any) {
  const usedTech = (usedClass: string) => {
    return technologies.some((className: string) => usedClass === className);
  };

  return (
    <StyledDiv>
      <h3>{title}</h3>
      <div className="technologies">
        {usedTech("HTML") && <i className="html devicon-html5-plain"></i>}
        {usedTech("CSS") && <i className="css devicon-css3-plain"></i>}
        {usedTech("JS") && <i className="javascript devicon-javascript-plain"></i>}
        {usedTech("PHP") && <i className="devicon-php-plain"></i>}
        {usedTech("React") && <i className="react devicon-react-original"></i>}
        {usedTech("Typescript") && <i className="typescript devicon-typescript-plain"></i>}
        {usedTech("git") && <i className="git devicon-git-plain"></i>}
        {usedTech("Webpack") && <i className="webpack devicon-webpack-plain"></i>}
        {usedTech("Firebase") && <i className="firebase devicon-firebase-plain"></i>}
        {usedTech("WordPress") && <i className="wordpress devicon-wordpress-plain"></i>}
        {usedTech("Jest") && <i className="devicon-jest-plain"></i>}
      </div>

      <p>{description}</p>
      <a href={url}>Ver sitio</a>
    </StyledDiv>
  );
}
