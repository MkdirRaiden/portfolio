import { moreProjects } from "../../constants";
import { MdArrowRightAlt } from "react-icons/md";

const MoreProject = () => {
  return (
    <section className="md:py-10 py-16">
      <h1 className="mb-10 font-Gustavo">More Projects</h1>
      <div className="flex max-sm:flex-col gap-8">
        {moreProjects.map(({ _id, link, image, name, description, tech }) => (
          <a
            key={_id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group card md:w-4/12 w-full h-52 rounded-md relative overflow-hidden"
          >
            <img
              src={image}
              alt={`${name} project screenshot`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 py-4 bg-primary w-full h-full translate-y-[80%] group-hover:translate-y-0 transition-transform duration-200 ease-linear">
              <div>
                <h2 className="text-lg mb-2 text-color-secondary">{name}</h2>
                <p className="text-color-tertiary text-sm mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((techName) => (
                    <span
                      key={techName}
                      className="text-sm text-orange-500"
                    >
                      {techName}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-xl rounded-full w-fit p-1 flex items-center text-blue-600 mt-2">
                <span className="text-sm mr-1">Visit Website</span>{" "}
                <MdArrowRightAlt />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MoreProject;
