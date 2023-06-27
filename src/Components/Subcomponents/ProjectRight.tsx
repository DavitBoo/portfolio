import React from "react";
import DesktopScreen from "../Generics/DesktopScreen";
import MobileScreen from "../Generics/MobileScreen";

import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProjectRight() {
  return (
    <StyledDiv>
      <DesktopScreen />
      <MobileScreen />
    </StyledDiv>
  );
}
