import { useState } from "react";
import { navLinkItems } from "../../constants";
import { FaDownload } from "react-icons/fa6";
import Button from "./Button";
import heroNavImg  from "/images/heroNav.jpg";
import toast from "react-hot-toast";
import { enablePageScroll } from "scroll-lock";

const HeaderLinks = ({ openNavigation, setOpenNavigation }) => {

    const [isDownloading, setIsDownloading] = useState(false);
    const downloadPdf = async () => {
      setIsDownloading(true);
      try {
        const response = await fetch("/Muktadir.pdf");
        if (!response.ok) throw new Error("Failed to fetch resume");
        const pdfBlob = await response.blob();
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
      } finally {
        setIsDownloading(false);
      }
    };

  return (
     <>
        <nav
          className={`${
            openNavigation
              ? "block font-extrabold"
              : "max-md:hidden font-poppins font-light"
          } m-auto max-md:fixed left-0 top-0 max-md:w-full bottom-0 lg:static relative`}
        >
          <div className="max-sm:absolute max-sm:bg-primary w-full h-full md:hidden inline-flex">
            <img
              className="absolute w-full h-full"
              src={heroNavImg}
              alt="background image"
            />
            <div className="w-full h-full absolute opacity-40 max-sm:bg-primary"></div>
          </div>
          <div className="wh-full flex justify-center items-center max-md:flex-col max-sm:absolute">
            {navLinkItems.map((item, ndx) =>
              item.path ? (
                <Button
                  onClick={() => {
                    setOpenNavigation(false);
                    enablePageScroll();
                  }}
                  className={`navLink hover:text-gray-400 translate-y-8 text-center md:text-xs text-3xl cursor-pointer duration-150 ${
                    item.mobileOnly ? "md:hidden" : ""
                  }`}
                  href={item.path}
                  key={ndx}
                  activeClass={"text-gray-400"}
                >
                  {item.path.toUpperCase()}
                </Button>
              ) : (
                <button title="download resume" onClick={downloadPdf} key={ndx}>
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
            "text-white hover:text-gray-400 right-button translate-y-4 opacity-0 md:inline-flex hidden text-xl transition-all duration-150"
          }
          onClick={downloadPdf}
          disabled={isDownloading}
        >
          {isDownloading ? (
            <span className="text-sm text-gray-300">opening...</span>
          ) : (
            <FaDownload />
          )}
        </button>
     </>
  );
};

export default HeaderLinks;