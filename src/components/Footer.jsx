import { navLinkItems } from "../constants";
import Button from "./sub/Button";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaRegCopyright,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    {
      _id: 0,
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/muktadir.ahmed.315",
    },
    {
      _id: 1,
      name: "Linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/muktadir-ahmed-arsalan/",
    },
    {
      _id: 2,
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/muktadir1996ahmed/",
    },
    {
      _id: 3,
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/MkdirRaiden",
    },
  ];
  return (
    <>
      <section className="md:px-32 px-4 py-12">
        <div>
          <div className="md:space-x-6 space-x-2 w-fit mx-auto">
            {navLinkItems.map(
              (item) =>
                !item.mobileOnly && (
                  <Button
                    className={`cursor-pointer md:text-sm text-xs text-color-tertiary hover:text-white duration-150 md:pe-6 pe-2 ${
                      item._id !== 4 ? "border-r border-gray-700" : ""
                    }`}
                    href={item.path}
                    key={item._id}
                    activeClass={"active"}
                  >
                    {item.name.toUpperCase()}
                  </Button>
                )
            )}
          </div>
          <div className="flex w-fit space-x-4 mx-auto mt-6">
            {socialIcons.map((item) => (
              <a
                className=" text-3xl cursor-pointer text-[#a1bbff] opacity-75 hover:scale-[1.05] hover:opacity-100 transition-all duration-50 ease-in"
                key={item._id}
                href={item.link}
                target="_blank"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="border-t border-gray-800 flex items-center justify-center py-6">
        <div className="flex items-center opacity-75 text-sm">
          <FaRegCopyright />{" "}
          <span>2025 Muktadir Ahmed. All rights reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
