import React from "react";
import DesktopScreen from "../Generics/DesktopScreen";
import MobileScreen from "../Generics/MobileScreen";

import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProjectRight({ desktop, mobile, responsive }: any) {
  return (
    <StyledDiv>
      <DesktopScreen desktop={desktop} />
      {responsive && <MobileScreen mobile={mobile} />}
    </StyledDiv>
  );
}
