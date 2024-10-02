import React from "react";
import ShowcaseProject from "./ShowcaseProject";

const FrontendProject = ({ project, setProjectNo }) => {
  return (
    <>
      <ShowcaseProject
        key={project._id}
        setProjectNo={setProjectNo}
        _id={project._id}
        subTitle1={project.subtitle1}
        subTitle2={project.subtitle2}
        title1={project.title1}
        title2={project.title2}
        pText={project.pText}
        btnText={project.btnText}
        btnUrl={project.btnUrl}
        videoSrc={project.video}
        link={project.link}
      />
    </>
  );
};

export default FrontendProject;
