import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  a {
    text-decoration: none;
    color: var(--color-naranja-vibrante);

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default function Footer() {
  return <StyledFooter>© David Boo 2023</StyledFooter>;
}
