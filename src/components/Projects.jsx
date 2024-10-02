import { useState } from "react";
import { showcaseProjects } from "../constants";
import MoreProject from "./sub/MoreProject";
import ShowcaseProject from "./sub/ShowcaseProject";
import FrontendProject from "./sub/FrontendProject";

const Projects = () => {
  const [projectNo, setProjectNo] = useState(0);

  const project = showcaseProjects[1][projectNo];

  return (
    <section id="projects" className="min-h-[100vh] common-padding">
      {showcaseProjects.map(
        (project) =>
          !Array.isArray(project) && (
            <div key={project._id}>
              <ShowcaseProject
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
            </div>
          )
      )}
      <FrontendProject project={project} setProjectNo={setProjectNo} />
      <MoreProject />
    </section>
  );
};

export default Projects;
