import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  max-width: 980px;
  flex-direction: column;
  padding-right: 25%;

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

  .icons {
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;

    > * {
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
    }

    .firebase {
      filter: drop-shadow(0px 0px 2px var(--color-firebase));

      &::after {
        background-color: var(--color-firebase);
      }

      &:hover::after {
        transform: scaleX(1);
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
    }

    .html {
      filter: drop-shadow(0px 0px 2px var(--color-html));

      &::after {
        background-color: var(--color-html);
      }

      &:hover::after {
        transform: scaleX(1);
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
    }

    .react {
      filter: drop-shadow(0px 0px 2px var(--color-react));

      &::after {
        background-color: var(--color-react);
      }

      &:hover::after {
        transform: scaleX(1);
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
    }

    .webpack {
      filter: drop-shadow(0px 0px 2px var(--color-webpack));

      &::after {
        background-color: var(--color-webpack);
      }

      &:hover::after {
        transform: scaleX(1);
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
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    color: var(--color-blanco-puro);
    background-color: var(--color-violeta-intenso);
    border: none;
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
    }
  }
`;

export default function About() {
  return (
    <StyledDiv>
      <h2>¿Cómo hago lo que que hago?</h2>
      <p>
        Hasta ahora he cacharreado lo suficiente como para decir que conozco:
      </p>
      <div className="icons">
        <i className="css devicon-css3-plain"></i>
        <i className="firebase devicon-firebase-plain"></i>
        <i className="git devicon-git-plain"></i>
        <i className="html devicon-html5-plain"></i>
        <i className="javascript devicon-javascript-plain"></i>
        <i className="react devicon-react-original"></i>
        <i className="typescript devicon-typescript-plain"></i>
        <i className="webpack devicon-webpack-plain"></i>
        <i className="wordpress devicon-wordpress-plain"></i>
      </div>
      <p>
        Además he hecho cosas con Bootstrap, Jest.js, d3.js, Node.js,
        Express.js, MongoDB, PHP, Woocommerce, Python, pero no me siento lo
        suficientemente cómodo para meterlos en el saco anterior.
      </p>
      <p>
        Por otro lado tengo mi cuenta de Github donde realmente se puede ver el
        código de casi todos los proyectos que voy haciendo hasta ahora:
      </p>
      <button>
        <i className="devicon-github-original"></i> ¡Visita mi cuenta!{" "}
      </button>
    </StyledDiv>
  );
}
