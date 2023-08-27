import React from "react";
import DesktopScreen from "../Generics/DesktopScreen";
import MobileScreen from "../Generics/MobileScreen";

import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ProjectRightProps {
  desktop: string;
  mobile: string;
  responsive: boolean;
}

export default function ProjectRight({ desktop, mobile, responsive }: ProjectRightProps) {
  return (
    <StyledDiv>
      <DesktopScreen desktop={desktop} responsive={responsive} />
      {responsive && <MobileScreen mobile={mobile} />}
    </StyledDiv>
  );
}
