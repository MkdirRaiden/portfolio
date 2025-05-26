import { moreProjects } from "../../constants";
import { MdArrowRightAlt } from "react-icons/md";

const MoreProject = () => {
  return (
    <div className="md:py-10 py-16">
      <h1 className="mb-10 font-Gustavo">MORE PROJECTS</h1>
      <div className="flex max-sm:flex-col gap-8">
        {moreProjects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            key={project._id}
            className="card md:w-4/12 w-full h-52 rounded-md relative overflow-hidden group"
          >
            <img
              src={project.image}
              alt="image"
              width={"100%"}
              height={"100%"}
            />
            <div className="absolute bottom-0 left-0 py-4 bg-primary w-full h-full translate-y-[80%] group-hover:translate-y-0 transition-transform duration-200 ease-linear">
              <div>
                <h2 className="text-lg mb-2 text-color-secondary">
                  {project.name}
                </h2>
                <p className="text-color-tertiary text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-row flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span className="text-sm text-orange-500" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-xl rounded-full w-fit p-1  flex items-center text-blue-600">
                <span className="text-sm">visit website</span>{" "}
                <MdArrowRightAlt />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MoreProject;
