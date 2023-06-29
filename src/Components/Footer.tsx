import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  a {
    text-decoration: none;
    color: var(--color-naranja-vibrante);

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default function Footer() {
  return (
    <StyledDiv>
      © David Boo 2023 - <a href="mailto:davitbooweb@gmail.com">Contacto</a>{" "}
    </StyledDiv>
  );
}
