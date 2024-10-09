import { heroMoonBgImg, heroVideoSrc } from "../utils";
import FloatingAstranaut from "./FloatingAstranaut";

const Hero = () => {
  return (
    <section
      id="overview"
      className="relative w-full h-[100vh] overflow-hidden"
    >
      <div className="wh-full top-0 left-0 absolute">
        <div className="absolute wh-full top-0 left-0">
          <div className="absolute top-0 left-0 wh-full bg-black opacity-50" />
          <img
            className="md:hidden block absolute left-0 bottom-20 scale-[1.75]"
            src={heroMoonBgImg}
            alt="background"
          />
          <video className="md:block hidden" autoPlay>
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="relative wh-full z-[5] ">
        <div className="absolute wh-full top-0 left-0 pointer-events-none common-padding flex justify-center items-center"></div>
        <div className="wh-full">
          <FloatingAstranaut />
        </div>
      </div>
    </section>
  );
};

export default Hero;
