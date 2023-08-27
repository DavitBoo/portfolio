import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../Context/LanguageContext";

const StyledSection = styled.section`
  display: flex;
  max-width: 980px;
  flex-direction: column;
  /* padding-right: 25%; */

  h2 {
    font-size: 2.2rem;
    font-weight: 400;
  }

  p {
    font-size: 1.2rem;
  }

  i {
    font-size: 3rem;
  }

  a {
    text-decoration: none;
  }

  .d-flex {
    display: flex;
    gap: 1rem;
  }

  .icons {
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
    position: relative;

    .text-box {
      transform: scaleX(0);
      position: absolute;
      top: -5px;
      left: 50%;
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      font-family: "DM Sans", sans-serif;
      padding: 0.3rem;
      font-weight: 800;
      border-radius: 4px;
      backdrop-filter: blur(10px);
      background-color: #ffffffb3;
      color: #383838;
      cursor: default;
    }

    > label > * {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 2px;
        width: 42px;
        height: 4px;
        transform: scaleX(0);
        transition: all 0.3s;
        border-radius: 4px;
      }
    }

    .css {
      filter: drop-shadow(0px 0px 2px var(--color-css));

      &::after {
        background-color: var(--color-css);
      }

      &:hover::after {
        transform: scaleX(1);
      }

      &:hover .text-box {
        transform: scaleX(1) translateX(-50%);
        font-size: 1rem;
      }
    }

    .firebase {
      filter: drop-shadow(0px 0px 2px var(--color-firebase));

      &::after {
        background-color: var(--color-firebase);
      }

      &:hover::after {
        transform: scaleX(1);
      }

      &:hover .text-box {
        transform: scaleX(1) translateX(-50%);
        font-size: 1rem;
      }
    }

    .git {
      filter: drop-shadow(0px 0px 2px var(--color-git));

      &::after {
        background-color: var(--color-git);
      }

      &:hover::after {
        transform: scaleX(1);
      }

      &:hover .text-box {
        transform: scaleX(1) translateX(-50%);
        font-size: 1rem;
      }
    }

    .html {
      filter: drop-shadow(0px 0px 2px var(--color-html));

      &::after {
        background-color: var(--color-html);
      }

      &:hover::after {
        transform: scaleX(1);
      }

      &:hover .text-box {
        transform: scaleX(1) translateX(-50%);
        font-size: 1rem;
      }
    }

    .javascript {
      filter: drop-shadow(0px 0px 2px var(--color-js));

      &::after {
        background-color: var(--color-js);
      }

      &:hover::after {
        transform: scaleX(1);
      }

      &:hover .text-box {
        transform: scaleX(1) translateX(-50%);
        font-size: 1rem;
      }
    }

    .react {
      filter: drop-shadow(0px 0px 2px var(--color-react));

      &::after {
        background-color: var(--color-react);
      }

      &:hover::after {
        transform: scaleX(1);
      }

      &:hover .text-box {
        transform: scaleX(1) translateX(-50%);
        font-size: 1rem;
      }
    }

    .typescript {
      filter: drop-shadow(0px 0px 2px var(--color-ts));

      &::after {
        background-color: var(--color-ts);
      }

      &:hover::after {
        transform: scaleX(1);
      }

      &:hover .text-box {
        transform: scaleX(1) translateX(-50%);
        font-size: 1rem;
      }
    }

    .webpack {
      filter: drop-shadow(0px 0px 2px var(--color-webpack));

      &::after {
        background-color: var(--color-webpack);
      }

      &:hover::after {
        transform: scaleX(1);
      }

      &:hover .text-box {
        transform: scaleX(1) translateX(-50%);
        font-size: 1rem;
      }
    }

    .wordpress {
      filter: drop-shadow(0px 0px 2px var(--color-wordpress));

      &::after {
        background-color: var(--color-wordpress);
      }

      &:hover::after {
        transform: scaleX(1);
      }

      &:hover .text-box {
        transform: scaleX(1) translateX(-50%);
        font-size: 1rem;
      }
    }
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    background-color: #fff;
    color: var(--color-violeta-intenso);
    border: 2px solid var(--color-violeta-intenso);

    cursor: pointer;
    border-radius: 8px;
    padding: 0.6rem;
    max-width: 250px;
    transition: opacity 0.2s ease;
    font-weight: 700;

    i {
      font-size: 1.5rem;
    }

    &:hover {
      opacity: 0.8;
      box-shadow: 1px 1px 4px var(--color-violeta-intenso);
    }
  }
`;

export default function About() {
  const { language } = useContext(LanguageContext);

  return (
    <StyledSection>
      <h2>{language === "es-ES" ? "¿Cómo hago lo que que hago?" : "How do I do what I do?"}</h2>
      <p>
        {language === "es-ES"
          ? "Hasta ahora he cacharreado lo suficiente como para decir que conozco:"
          : "So far I have worked enough to say that I know:"}
      </p>
      <div className="icons">
        <label htmlFor="css-icon" aria-label="CSS3">
          <i id="css-icon" className="css devicon-css3-plain">
            <p className="text-box">CSS3</p>
          </i>
        </label>
        <label htmlFor="firebase-icon" aria-label="Firebase">
          <i id="firebase-icon" className="firebase devicon-firebase-plain">
            <p className="text-box">Firebase</p>
          </i>
        </label>
        <label htmlFor="git-icon" aria-label="Git">
          <i id="git-icon" className="git devicon-git-plain">
            <p className="text-box">Git</p>
          </i>
        </label>
        <label htmlFor="html-icon" aria-label="HTML5">
          <i id="html-icon" className="html devicon-html5-plain">
            <p className="text-box">HTML5</p>
          </i>
        </label>
        <label htmlFor="javascript-icon" aria-label="JavaScript">
          <i id="javascript-icon" className="javascript devicon-javascript-plain">
            <p className="text-box">JavaScript</p>
          </i>
        </label>
        <label htmlFor="react-icon" aria-label="React.js">
          <i id="react-icon" className="react devicon-react-original">
            <p className="text-box">React.js</p>
          </i>
        </label>
        <label htmlFor="typescript-icon" aria-label="TypeScript">
          <i id="typescript-icon" className="typescript devicon-typescript-plain">
            <p className="text-box">TypeScript</p>
          </i>
        </label>
        <label htmlFor="webpack-icon" aria-label="Webpack">
          <i id="webpack-icon" className="webpack devicon-webpack-plain">
            <p className="text-box">Webpack</p>
          </i>
        </label>
        <label htmlFor="wordpress-icon" aria-label="WordPress">
          <i id="wordpress-icon" className="wordpress devicon-wordpress-plain">
            <p className="text-box">WordPress</p>
          </i>
        </label>
      </div>
      <p>
        {language === "es-ES"
          ? "Además he hecho cosas con Bootstrap, Jest.js, d3.js, Node.js, Express.js, MongoDB, PHP, Woocommerce, Python, pero no me siento lo suficientemente cómodo para meterlos en el saco anterior."
          : "I've also done things with Bootstrap, Jest.js, d3.js, Node.js, Express.js, MongoDB, PHP, Woocommerce, Python, but I don't feel comfortable enough as I feel with the above."}
      </p>
      <p>
        {language === "es-ES"
          ? "Por otro lado tengo mi cuenta de Github donde realmente se puede ver el código de casi todos los proyectos que voy haciendo hasta ahora:"
          : "On the other hand I have my Github account where you can actually see the code of almost all the projects I'm doing so far:"}
      </p>
      <div className="d-flex">
        <a className="button" href="https://github.com/DavitBoo/" target="_blanks">
          <i className="devicon-github-original"></i>{" "}
          {language === "es-ES" ? "¡Visita mi cuenta!" : "Visit my account!"}{" "}
        </a>
        <a className="button" href="https://codepen.io/davitboo/" target="_blanks">
          <i className="devicon-codepen-plain"></i> {language === "es-ES" ? "Y mi Codepen" : "And my Codepen"}{" "}
        </a>
      </div>
    </StyledSection>
  );
}
