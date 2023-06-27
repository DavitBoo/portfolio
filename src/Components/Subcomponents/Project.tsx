import React from "react";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
`;

export default function Project() {
  return (
    <StyledDiv>
      <ProjectLeft></ProjectLeft>
      <ProjectRight></ProjectRight>
    </StyledDiv>
  );
}
