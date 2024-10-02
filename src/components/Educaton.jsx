import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceEducation } from "../constants";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { GoStarFill } from "react-icons/go";

const Educaton = () => {
  return (
    <section
      id="educations"
      className="md:px-32 px-4 md:mt-36 mt-20 relative bg-gray-100 min-h-[100vh]"
    >
      <div className="curve md:block hidden bg-black w-[50%] h-24 -top-4 left-[50%] -translate-x-[50%] absolute">
        <h1 className="text-center md:pt-6 font-Gustavo text-3xl font-bold">
          EXPERIENCE & EDUCATIONS
        </h1>
      </div>
      <div className="md:hidden block scale-y-105 px-5 bg-black w-full h-[4.85rem] -top-4 left-0 absolute">
        <h1 className="text-center font-Gustavo text-xl font-semibold">
          EXPERIENCE & EDUCATIONS
        </h1>
      </div>
      <div className="md:pt-20 pt-16">
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
                <div className="rounded-full w-12 h-12 overflow-hidden">
                  <img
                    width={"100%"}
                    height={"100%"}
                    src={item.icon}
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="">{item.name}</h3>
                  <h4 className="">{item.address}</h4>
                </div>
              </div>
              <p className="opacity-50 text-sm font-extralight">{item.desc}</p>
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
