import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const MotionSvg = () => {
  useGSAP(() => {
    gsap.defaults({ ease: "none" });

    const pulses = gsap
      .timeline({
        defaults: {
          scale: 2,
          duration: 0.75,
          autoAlpha: 0.95,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to("#circle0", {}, 0.05)
      .to("#circle1", {}, 0.65)
      .to("#circle2", {}, 0.8)
      .to("#circle3", {}, 1.25)
      .to("#circle4", {}, 1.4)
      .to("#circle5", {}, 2);

    gsap
      .timeline({
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#svg",
          toggleActions: "restart none none none",
        },
      })
      .to("#motionPath", { strokeDashoffset: 0, duration: 2 }, 0)
      .to(
        "#motionPencil",
        {
          motionPath: {
            path: "#motionPath",
            align: "#motionPath",
            alignOrigin: [-0.1, 1],
          },
          duration: 2,
        },
        0
      )
      .add(pulses, 0);
  }, []);
  return (
    <>
      <svg id="svg" width={"100%"} height={"100%"} viewBox={`0 0 1350 144`}>
        <path
          id="motionPath"
          d="M0 36 H410 L500 109 H843 L930 36 H1340"
          stroke="#a1bbff"
          strokeWidth="1"
          fill="none"
          style={{
            strokeOpacity: 0.5,
            strokeDasharray: 1400,
            strokeDashoffset: 1400,
          }}
        ></path>
        <circle
          id="circle0"
          cx={0}
          cy={36}
          r={3}
          fill="white"
          style={{ visibility: "hidden" }}
        />
        <circle
          id="circle1"
          cx={410}
          cy={36}
          r={3}
          fill="white"
          style={{ visibility: "hidden" }}
        />
        <circle
          id="circle2"
          cx={500}
          cy={109}
          r={3}
          fill="white"
          style={{ visibility: "hidden" }}
        />
        <circle
          id="circle3"
          cx={843}
          cy={109}
          r={3}
          fill="white"
          style={{ visibility: "hidden" }}
        />
        <circle
          id="circle4"
          cx={930}
          cy={36}
          r={3}
          fill="white"
          style={{ visibility: "hidden" }}
        />
        <circle
          id="circle5"
          cx={1350}
          cy={36}
          r={3}
          fill="white"
          style={{ visibility: "hidden" }}
        />

        <image
          id="motionPencil"
          x={0}
          y={0}
          height="36"
          width="36"
          href="../../../drawing-pencil.png"
          fill="none"
        />
      </svg>
    </>
  );
};

export default MotionSvg;