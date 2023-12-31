import React from "react";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid var(--color-gris-acero);
  padding: 2rem 0rem 2rem 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 1rem 0.5rem 1rem 0.5rem;
  }

  /* flex-wrap: wrap; */
`;

interface ProjectProps {
  project: {
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    desktop: string;
    mobile: string;
    technologies: string[];
    url: string;
    responsive: boolean;
  };
}

export default function Project({
  project: { title, titleEn, description, descriptionEn, desktop, mobile, technologies, url, responsive },
}: ProjectProps) {
  return (
    <StyledDiv>
      <ProjectLeft
        title={title}
        titleEn={titleEn}
        description={description}
        descriptionEn={descriptionEn}
        technologies={technologies}
        url={url}
      />
      <a href={url} target="_blank">
        <ProjectRight mobile={mobile} desktop={desktop} responsive={responsive} />
      </a>
    </StyledDiv>
  );
}
