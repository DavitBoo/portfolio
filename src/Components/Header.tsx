import React from "react";
import styled from "styled-components";

import profile from "../assets/profile.jpg";

const StyledDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Indie+Flower&display=swap");
  /* height: 100vh; */

  .header-content {
    max-width: 980px;
    padding-right: 25%;
  }
  .my-name {
    font-family: "Indie Flower", cursive;
    font-size: 4rem;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 400;
  }

  p {
    font-size: 1.2rem;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid var(--color-naranja-vibrante);
  }
`;

export default function Header() {
  return (
    <StyledDiv>
      <div className="header-content">
        <h1 className="my-name">David Boo</h1>
        <h2>Desarrollador web en constante evolución</h2>
        {/* <h2>
          En proceso de desarrollar webs y herramientas que mejoren algún
          aspecto de lo usuarios que las usen.
        </h2> */}
        <p>
          A diferencia del mundo de la ingeniería industrial (de donde vengo) donde los limites muchas veces están
          marcados por la infraestructura y las leyes físicas. El desarrollo web, en mi opinión da mucho más paso a la
          imaginación y a la creatividad, siendo muchas veces estos los limites, a diferencia de lo que pasa en el mundo
          industrial. Este fue uno de los motivos por los que decidí centrar mi tiempo y mis ganas en aprender
          desarrollo web y programación.
        </p>
        {/* <img src={profile} alt="" /> */}
        <p>
          Cuando no estoy programando suelo hacer otras cosas, viajo, toco la guitarra, voy al monte o a la playa,
          entreno calistenia, construyo guitarras, aprendo idiomas, leo libros de casi cualquier tema y disfruto de la
          compañía de otros humanos.
        </p>
      </div>
    </StyledDiv>
  );
}
