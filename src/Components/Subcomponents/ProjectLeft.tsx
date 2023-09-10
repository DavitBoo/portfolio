import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../Context/LanguageContext";

const StyledDiv = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .technologies {
    display: flex;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  i {
    font-size: 1.7rem;
  }

  p {
    font-size: 1.2rem;
  }

  a {
    color: var(--color-naranja-vibrante);
    font-size: 1.1rem;
  }

  a:hover {
    color: var(--color-text);
  }
`;

export default function ProjectLeft({ title, titleEn, description, descriptionEn, technologies, url }: any) {
  const usedTech = (usedClass: string) => {
    return technologies.some((className: string) => usedClass === className);
  };

  const { language } = useContext(LanguageContext);

  return (
    <StyledDiv>
      <h3>{language === "es-ES" ? title : titleEn}</h3>
      <a className="visit-site-btn" href={url} target="_blank">
        {language === "es-ES" ? "Ver sitio" : "Visite the site"}
      </a>
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
        {usedTech("nodejs") && <i className="devicon-nodejs-plain"></i>}
        {usedTech("expressjs") && <i className="devicon-express-original"></i>}
        {usedTech("mongodb") && <i className="devicon-mongodb-plain"></i>}
        {usedTech("bs5") && <i className="devicon-bootstrap-plain"></i>}
      </div>

      <p>{language === "es-ES" ? description : descriptionEn}</p>
    </StyledDiv>
  );
}
