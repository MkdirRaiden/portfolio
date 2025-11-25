import { useState, useEffect } from "react";
import MenuSvg from "./svgs/MenuSvg";
import newLogoImg  from "/images/newLogo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import HeaderLinks from "./sub/HeaderLinks";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const hasScrolled = () => {
    if (window.scrollY >= 75) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", hasScrolled);
    gsap.to("#header-bg", {
      height: `${scrolled ? "100%" : "0%"}`,
      duration: 0.25,
      ease: "power1.inOut",
    });
    return () => {
      window.removeEventListener("scroll", hasScrolled);
    };
  }, [scrolled]);

  const tl = gsap.timeline();
  useGSAP(() => {
    gsap.to("#logo", {
      y: 0,
      opacity: 0.5,
      delay: 0.25,
      duration: 0.75,
      ease: "power1.inOut",
    });
    gsap.to(".right-button", {
      y: 0,
      opacity: 1,
      delay: 0.75,
      duration: 0.75,
      ease: "power1.inOut",
    });
    tl.to(".navLink", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      delay: 0.35,
      stagger: {
        each: 0.15,
        grid: "auto",
      },
    });
  }, []);

  return (
    <header className="fixed left-0 top-0 right-0 w-full z-10 bg-primary">
      <div
        id="header-bg"
        className="absolute bg-primary/90 w-full h-[0%]"
      ></div>
      <div className="relative flex items-center py-4 md:px-32 px-4">
        <a
          id="logo"
          className="-translate-y-8 opacity-0 flex items-center p-0 md:w-12 w-10  rounded-full bg-[#804dee]"
          href="/"
        >
          <img
            className="rounded-full scale-[.85]"
            src={newLogoImg}
            alt="logo"
            width={75}
            height={75}
          />
        </a>
        <HeaderLinks openNavigation={openNavigation} setOpenNavigation={setOpenNavigation} />
        <button
          onClick={handleMenu}
          className="right-button translate-y-4 opacity-0 flex items-center justify-center ml-auto sm:hidden cursor-pointer max-sm:scale-[1.15] p-2 hexagon-t"
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </header>
  );
};

export default Header;
