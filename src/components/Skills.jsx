import { backenedSkills, frontendSkills, otherSkills } from "../constants";
import { asteroidImg } from "../utils";
import SkillCard from "./SkillCard";
import { Parallax } from "react-scroll-parallax";

const Skills = () => {
  return (
    <>
      <section id="skills" className=" min-h-[85vh] relative overflow-hidden">
        <Parallax speed={10} className="wh-full absolute top-0 left-0">
          <div className="absolute top-[45%] left-[30%]">
            <div className="absolute top-0 left-0 wh-full bg-black opacity-60"></div>
            <img src={asteroidImg} alt="asteroid image" />
          </div>
        </Parallax>
        <div className="absolute left-0 top-0 wh-full bg-black opacity-50" />
        <div className="common-padding">
          <div className=" flex max-sm:flex-col md:gap-10 gap-2">
            {Array.from("123").map((_, ndx) => (
              <div className={`md:w-1/3 w-full h-[25rem]`} key={ndx}>
                <SkillCard
                  ndx={ndx}
                  arr={
                    ndx === 0
                      ? frontendSkills
                      : ndx === 1
                      ? backenedSkills
                      : otherSkills
                  }
                  title={
                    ndx === 0 ? "Frontend" : ndx === 1 ? "Backened" : "Others"
                  }
                  bg={
                    ndx === 0
                      ? "skill-card-bg1"
                      : ndx === 1
                      ? "skill-card-bg2"
                      : "skill-card-bg3"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
