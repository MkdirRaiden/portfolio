import { heroMoonBgImg } from "../utils";
import FloatingAstranaut from "./FloatingAstranaut";

const Hero = () => {
  return (
    <section
      id="overview"
      className="relative w-full h-[100vh] overflow-hidden"
    >
      <div className="wh-full top-0 left-0 absolute">
        <div className="scale-[1.5] md:block hidden hero-bg-animate">
          <img src={heroMoonBgImg} alt="background image" width={"100%"} />
        </div>
        <div className="scale-[1.75] md:hidden block translate-y-96">
          <img src={heroMoonBgImg} alt="background image" />
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
