import { useGSAP } from "@gsap/react";

import gsap from "gsap";

const Loading = () => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.25 });
  useGSAP(() => {
    tl.to(".box", {
      scale: 1,
      y: 0,
      stagger: {
        each: 0.25,
      },
    });
  }, []);
  return (
    <div className="flex container -translate-x-6">
      <div className="box scale-0 translate-y-4 bg-[#0ae448] relative rounded-md w-6 h-6"></div>
      <div className="box scale-0 translate-y-4 bg-[#0ae448] relative rounded-md w-6 h-6"></div>
      <div className="box scale-0 translate-y-4 bg-[#0ae448] relative rounded-md w-6 h-6"></div>
    </div>
  );
};

export default Loading;
