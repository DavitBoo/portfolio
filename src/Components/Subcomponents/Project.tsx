import React from "react";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  /* flex-wrap: wrap; */
`;

interface ProjectProps {
  project: {
    title: string;
    description: string;
    desktop: string;
    mobile: string;
    technologies: string[];
    url: string;
    responsive: boolean;
  };
}

export default function Project({ project }: ProjectProps) {
  const { title, description, desktop, mobile, technologies, url, responsive } = project;

  return (
    <StyledDiv>
      <ProjectLeft title={title} description={description} technologies={technologies} url={url} />
      <a href={url} target="_blank">
        <ProjectRight mobile={mobile} desktop={desktop} responsive={responsive} />
      </a>
    </StyledDiv>
  );
}
