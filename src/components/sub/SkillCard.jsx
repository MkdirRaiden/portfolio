import SkillItems from "./SkillItems";
import { useRef } from "react";
import gsap from "../../utils/gsap";
import { useGSAP } from "@gsap/react";

const SkillCard = ({ arr, title, bg, ndx }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.to(cardRef.current, {
      x: 0,
      y: 0,
      opacity: 0.85,
      ease: "power1.inOut",
      duration: (ndx / 3 + 1) * 0.95,
      scrollTrigger: {
        trigger: cardRef.current,
        toggleActions: "restart none none none",
      },
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${
        ndx === 0
          ? "-translate-x-14"
          : ndx === 1
          ? "translate-y-10 md:mt-12 card-wrap"
          : "translate-x-10"
      } opacity-0 h-[22rem]`}
    >
      <div className={`octagon ${bg} p-[0.15rem] relative`}>
        <div className="flex flex-wrap bg-black-100 octagon py-14 space-x-2 space-y-2">
          <div className={`absolute top-0 left-[50%] -translate-x-[50%] p-2`}>
            {title}
          </div>

          <SkillItems arr={arr} title={title} />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
