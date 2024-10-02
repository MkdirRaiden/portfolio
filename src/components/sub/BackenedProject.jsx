import { Parallax } from "react-scroll-parallax";
import CustomButton from "./CustomButton";
import { TwitterProject } from "../../constants";
import gsap from "../../utils/gsap";
import { useGSAP } from "@gsap/react";

const BackenedProject = () => {
  useGSAP(() => {
    gsap.to("#projects-title1", {
      y: 4,
      duration: 0.5,
      opacity: 1,
      scrollTrigger: {
        trigger: "#projects-title1",
        toggleActions: "restart none none none",
      },
    });
    gsap.to("#projects-image1", {
      height: "0%",
      delay: 0.5,
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#projects-image1",
        toggleActions: "restart none none none",
      },
    });
  }, []);
  return (
    <div className="md:py-20 py-16">
      <div className="flex md:flex-row flex-col justify-between max-sm:gap-20">
        <h2 className="font-Gustavo md:w-2/5 w-full">
          {TwitterProject[0].h2_1}
          <br />
          {TwitterProject[0].h2_2}
        </h2>
        <div
          id="projects-title1"
          className="font-Gustavo md:text-[62px] text-3xl font-semibold md:w-3/5 w-full md:translate-y-8 opacity-0"
        >
          <div>{TwitterProject[0].h1_1}</div>
          <div className="text-end md:translate-y-5">
            {TwitterProject[0].h1_2}
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:mt-36 mt-10">
        <div className="md:w-2/5 w-full">
          <p className=" text-color-tertiary max-sm:mt-10 md:w-3/5 w-full mb-10">
            {TwitterProject[0].pText}
          </p>
          <CustomButton
            text={TwitterProject[0].buttonText}
            width={"200px"}
            height={"80px"}
          />
        </div>

        <Parallax
          speed={5}
          className="md:w-3/5 w-full h-full relative overflow-hidden rounded-lg"
        >
          <div
            id="projects-image1"
            className="absolute bottom-0 left-0 right-0 w-full h-full bg-color-bgDark"
          ></div>
          <video
            id="video1"
            className="pointer-events-none"
            preload="auto"
            playsInline={true}
            muted
            autoPlay={true}
          >
            <source src={TwitterProject[0].video} type="video/mp4" />
          </video>
        </Parallax>
      </div>
    </div>
  );
};

export default BackenedProject;
