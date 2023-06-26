import React from "react";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

export default function Project() {
  return (
    <div>
      <div>Select Technology</div>
      <ProjectLeft></ProjectLeft>
      <ProjectRight></ProjectRight>
    </div>
  );
}
