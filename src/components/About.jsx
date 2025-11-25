import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "./hoc";
import { styles } from "../css/styles";
import { fadeIn, textVariant } from "../utils/motion";
import CustomButton from "./sub/CustomButton";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="md:w-1/5 w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a self-taught software developer and multilingual speaker with a
        passion for programming, web development, and software development. I am
        looking to join a company that values innovation, collaboration, and
        continuous learning and am confident that my enthusiasm and drive will
        help me succeed in any role that leverages my passion for technology.
      </motion.p>
      <div className="mt-10 ">
        <CustomButton
          text={"Get in touch"}
          to={"contact"}
          width={200}
          height={60}
        />
      </div>
      <div className="mt-28 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
