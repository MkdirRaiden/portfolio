import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceEducation } from "../constants";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { GoStarFill } from "react-icons/go";
import { styles } from "../styles";

const Educaton = () => {
  return (
    <section
      id="educations"
      className="md:px-32 px-4 md:mt-36 mt-40 relative bg-gray-100 min-h-[100vh]"
    >
      <div className="curve md:block hidden bg-primary w-[75%] h-44 -top-4 left-[50%] -translate-x-[50%] absolute">
        <div className={`${styles.sectionSubText} md:text-center`}>
          WHAT I HAVE DONE SO FAR
        </div>
        <h1 className={`text-center md:pt-6 ${styles.sectionHeadText}`}>
          EXPERIENCE & EDUCATIONS
        </h1>
      </div>
      <div className="md:hidden block scale-y-105 px-5 bg-primary w-full h-[4.85rem] -top-40 left-0 absolute">
        <div className={`${styles.sectionSubText}`}>
          WHAT I HAVE DONE SO FAR
        </div>
        <h1 className={`${styles.sectionHeadText} text-[1.25rem]`}>
          EXPERIENCE & EDUCATIONS
        </h1>
      </div>
      <div className="md:pt-40 max-sm -ml-5">
        <VerticalTimeline lineColor="#ffffff">
          {experienceEducation.map((item) => (
            <VerticalTimelineElement
              key={item._id}
              className="font-poppins font-medium"
              contentStyle={{ background: "#ffffff", color: "#000000" }}
              contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
              date={item.date}
              iconStyle={{ background: "#4479fd", color: "#ffffff" }}
              icon={
                item.type === "experience" ? (
                  <MdOutlineWork />
                ) : (
                  <FaGraduationCap />
                )
              }
            >
              <div className="flex gap-2 items-center">
                <div className="rounded-full w-10 h-10 overflow-hidden">
                  <img
                    width={"100%"}
                    height={"100%"}
                    src={item.icon}
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-blue-600 max-sm:text-sm">
                    {item.name}
                  </h3>
                  <h6 className="text-orange-400 max-sm:text-xs text-sm">
                    {item.address}
                  </h6>
                </div>
              </div>
              <ul
                className="opacity-50 text-sm py-4"
                style={{ listStyleType: "circle", marginLeft: "1.25rem" }}
              >
                {item.desc.map((item, idx) => {
                  return idx === 2 && item.startsWith("https") ? (
                    <li key={item}>
                      <a
                        target="_blanck"
                        className="text-blue-600 text-sm hover:opacity-70"
                        href={item}
                      >
                        {item}
                      </a>
                    </li>
                  ) : (
                    <li key={item}>{item}</li>
                  );
                })}
              </ul>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: "#4479fd", color: "#ffffff" }}
            icon={<GoStarFill />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Educaton;
