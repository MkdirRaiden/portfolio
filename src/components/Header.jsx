import { useState, useEffect } from "react";
import { navLinkItems } from "../constants";
import MenuSvg from "./svgs/MenuSvg";
import { FaDownload } from "react-icons/fa6";
import Button from "./sub/Button";
import { heroNavImg, newLogoImg } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import axios from "axios";
import toast from "react-hot-toast";

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
      opacity: 1,
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

  const downloadPdf = async () => {
    try {
      const response = await axios.get("Muktadir.pdf", {
        responseType: "blob",
      });
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrl = window.URL.createObjectURL(pdfBlob);
      const tempLink = document.createElement("a");
      tempLink.href = pdfUrl;
      tempLink.setAttribute("download", "Muktadir-resume.pdf");
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(pdfUrl);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <header className="fixed left-0 top-0 right-0 w-full z-10">
      <div
        id="header-bg"
        className="absolute border-b border-gray-900 bg-color-bgDark w-full h-[0%]"
      ></div>
      <div className="relative flex items-center py-4 md:px-32 px-4">
        <a
          id="logo"
          className="-translate-y-8 opacity-0 flex items-center gap-2 md:w-12 w-10"
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
        <nav
          className={`${
            openNavigation
              ? "block font-Gustavo font-extrabold"
              : "max-md:hidden font-poppins font-light"
          } m-auto max-md:fixed left-0 top-0 max-md:w-full bottom-0 lg:static relative`}
        >
          <div className="max-sm:absolute max-sm:bg-black w-full h-full md:hidden inline-flex">
            <img
              className="absolute w-full h-full"
              src={heroNavImg}
              alt="background image"
            />
            <div className="w-full h-full absolute opacity-40 max-sm:bg-black"></div>
          </div>
          <div className="wh-full flex justify-center items-center  md:gap-10 gap-8 max-md:flex-col max-sm:absolute">
            {navLinkItems.map((item, ndx) =>
              item.path ? (
                <Button
                  onClick={() => {
                    setOpenNavigation(false);
                    enablePageScroll();
                  }}
                  className={`navLink translate-y-8 opacity-0 text-center md:text-xs text-3xl cursor-pointer text-color-tertiary hover:text-white duration-150 ${
                    item.mobileOnly ? "md:hidden" : ""
                  }`}
                  href={item.path}
                  key={ndx}
                  activeClass={"active"}
                >
                  {item.path.toUpperCase()}
                </Button>
              ) : (
                <button onClick={downloadPdf} key={ndx}>
                  <div className="flex gap-2 items-center md:hidden border border-gray-600 py-2 px-4 rounded-md bg-color-primary hover:opacity-75 cursor-pointer">
                    <FaDownload />
                    <span>{item.name}</span>
                  </div>
                </button>
              )
            )}
          </div>
        </nav>
        <button
          className={
            "text-color-primary hover:text-gray-400 right-button translate-y-4 opacity-0 md:inline-flex hidden text-xl transition-all duration-150"
          }
          onClick={downloadPdf}
        >
          <FaDownload />
        </button>
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
