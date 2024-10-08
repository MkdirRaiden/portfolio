import { aboutImg, heroMoonBgImg } from "../utils";
import { Typewriter } from "react-simple-typewriter";
import CustomButton from "./sub/CustomButton";
import MotionSvg from "./svgs/MotionSvg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    gsap.from("#title-show", {
      y: 10,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: `#title-show`,
        toggleActions: "restart none none none",
      },
    });

    gsap.to("#title-image-show", {
      height: "0%",
      delay: 0.5,
      duration: 0.75,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: `#title-image-show`,
        toggleActions: "restart none none none",
      },
    });

    gsap.to("#button-show", {
      display: "block",
      delay: 0.5,
      duration: 0.75,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: `#button-show`,
        toggleActions: "restart none none none",
      },
    });
  }, []);

  return (
    <section
      id="about"
      className="md:min-h-[100vh] min-h-[140vh] relative overflow-hidden border-t-2 border-gray-900"
    >
      <div className="w-full md:block hidden h-36 z-[2] absolute -bottom-6 left-[50%] -translate-x-[50%]">
        <MotionSvg />
      </div>{" "}
      <div className="wh-full common-padding absolute">
        <div className="flex max-sm:flex-col-reverse justify-around items-center">
          <div className=" md:w-2/3 w-full">
            <div id="title-show">
              <h2 className="md:text-[2.5rem] md:-translate-y-2 text-3xl font-bold">
                👋🏻 Hi I'm{" "}
              </h2>
              <h1 className="md:text-[3.25rem] text-3xl font-Gustavo font-extrabold mb-4">
                MUKTADIR AHMED
              </h1>
            </div>
            <h2 className="md:text-4xl text-xl font font-semibold mb-4">
              <span className="me-2">I'm a</span>
              <span className="text-color-primary">
                <Typewriter
                  words={[
                    "WEB DEVELOPER",
                    "REACT DEVELOPER",
                    "MEARN DEVELOPER",
                    "FULLSTACK DEVELOPER",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="text-color-tertiary md:w-2/3 w-full mb-8">
              I'm a self-taught web developer. I want to get associated with an
              organization that provides a growth-oriented environment and scope
              to learn new skills. I am confident in delivering relevant output
              through my work which would impact the overall organizational
              growth.
            </p>
            <div className="h-[80px]">
              <div id="button-show" className="hidden">
                <CustomButton
                  width={200}
                  height={60}
                  text={"Get in touch"}
                  to={"contact"}
                  activeClass={"active"}
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/3 w-full shadow-md overflow-hidden max-sm:mb-5 relative">
            <div className="hexagon-v w-72 h-72">
              <img src={aboutImg} alt="avatar" />
              <div
                id="title-image-show"
                className="bg-black absolute wh-full bottom-0 left-0 border border-gray-950"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
