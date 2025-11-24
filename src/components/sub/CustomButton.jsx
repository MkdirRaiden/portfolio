import React, { useEffect } from "react";
import { Link } from "react-scroll";

const CustomButton = ({ text, width, height, to, activeClass, href }) => {
  useEffect(() => {
    const svgs = document.querySelectorAll(".primary-outline");
    const paths = document.querySelectorAll(".primary-outline-path");

    const handleMouseEnter = (i) => {
      // console.log(`entered on path ${i}`);
      paths[i].style.strokeDashoffset = "-331%";
      paths[i].style.transitionDuration = ".75s";
      paths[i].style.transitionDelay = ".15s";
    };
    const handleMouseLeave = (i) => {
      // console.log(`left path ${i}`);
      paths[i].style.strokeDashoffset = "-664%";
      paths[i].style.transitionDuration = ".5s";
      setTimeout(() => {
        paths[i].style.strokeDashoffset = "0%";
        paths[i].style.transitionDuration = "0s";
      }, [500]);
    };

    svgs.forEach((svg, ndx) => {
      svg.addEventListener("mouseenter", () => handleMouseEnter(ndx));
      svg.addEventListener("mouseleave", () => handleMouseLeave(ndx));
    });

    return () => {
      svgs.forEach((svg, ndx) => {
        svg.removeEventListener("mouseenter", () => handleMouseEnter(ndx));
        svg.removeEventListener("mouseleave", () => handleMouseLeave(ndx));
      });
    };
  }, []);

  const svg = (
    <>
      <svg
        width="100%"
        height="100%"
        className="absolute transition-all primary-outline duration-700 ease-out cursor-pointer"
        viewBox="0 0 211.65625 60"
      >
        <path
          className="primary-outline-path"
          fill="transparent"
          d="M211.65625 47.5
        L199.15625 60
        12.5 60
        L0 47.5
        L0 12.5
        L12.5 0
        L199.15625 0
        L211.65625 12.5 Z"
        ></path>
      </svg>

      <span className="text-lg">
        <span> {text} </span>
      </span>
      <div className="relative w-[10%] h-[50%] flex justify-center items-center overflow-hidden z-[1] ">
        <span
          className="absolute group-hover:-translate-x-0 opacity-0 transition-all duration-550 -z-[1] ease-linear -translate-x-[150%] group-hover:opacity-100 delay-100"
          id="first"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.97 11.947H3M14.362 3 20 8.964v5.965l-5.638 5.964"
              strokeWidth="2"
            ></path>
          </svg>
        </span>

        <span id="sec" className="absolute group-hover:translate-x-[150%]">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.97 11.947H3M14.362 3 20 8.964v5.965l-5.638 5.964"
              strokeWidth="2.55"
            ></path>
          </svg>
        </span>
      </div>
    </>
  );

  return to ? (
    <Link
      className={`relative group text-white underline-none flex justify-around items-center pointer-events-auto px-4`}
      smooth={true}
      to={to}
      spy={true}
      activeClass={activeClass}
      offset={-50}
      delay={100}
      duration={500}
      style={{ width: width, height: height }}
    >
      {svg}
    </Link>
  ) : (
    <a
      className={`relative group text-white underline-none flex justify-around items-center pointer-events-auto px-4`}
      href={href}
      target="_blank"
      style={{ width: width, height: height }}
    >
      {svg}
    </a>
  );
};

export default CustomButton;