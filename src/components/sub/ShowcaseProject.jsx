import { Parallax } from "react-scroll-parallax";
import CustomButton from "./CustomButton";
import gsap from "../../utils/gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { styles } from "../../styles";

const ShowcaseProject = ({
  subTitle1,
  subTitle2,
  title1,
  title2,
  pText,
  btnUrl,
  btnText,
  videoSrc,
  _id,
  setProjectNo,
  link,
}) => {
  const videoRef = useRef(null);

  const [video, setVideo] = useState({
    videoId: _id,
    startPlay: false,
    isPlaying: false,
  });

  const { startPlay, isPlaying, videoId } = video;
  const [loadedData, setLoadedData] = useState(false);

  useGSAP(() => {
    gsap.to(`#video${_id}`, {
      scrollTrigger: {
        trigger: `#video${_id}`,
        toggleActions: "restart none none none",
      },
      onStart: () =>
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        })),
    });

    gsap.to(`#titleShow${_id}`, {
      y: 4,
      duration: 0.25,
      opacity: 1,
      scrollTrigger: {
        trigger: `#titleShow${_id}`,
        toggleActions: "restart none none none",
      },
    });

    gsap.to(`#videoShow${_id}`, {
      height: "0%",
      delay: 0.5,
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: `#videoShow${_id}`,
        toggleActions: "restart none none none",
      },
    });
  }, [videoId]);

  useEffect(() => {
    if (loadedData) {
      if (!isPlaying) {
        videoRef.current.pause();
      } else {
        startPlay && videoRef.current.play();
      }
    }
  }, [loadedData, startPlay, isPlaying, videoId]);

  const handleChange = (param) => {
    setProjectNo(param);
    setVideo((pre) => ({ ...pre, videoId: param + 1 }));
  };

  const button = () => {};

  return (
    <div className=" min-h-[110vh] pb-16">
      <div>
        <div
          className={`${
            _id === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } flex flex-col justify-between max-sm:gap-10`}
        >
          <div className="">
            <h2
              className={`${
                _id === 1 || _id === 2 ? "md:text-end" : ""
              }  md:w-fit w-full ${styles.sectionSubText}`}
            >
              <span>{subTitle1}</span>
              <br />
              <span>{subTitle2}</span>
            </h2>
            {_id !== 0 && (
              <div className="flex justify-center items-center gap-2 mt-2 md:ml-auto w-20 h-10">
                <button
                  disabled={videoId === 1}
                  onClick={() => handleChange(0)}
                  className={`${
                    videoId === 1 ? "text-black-200 bg-white" : ""
                  } hexagon-v font-Gustavo font-bold`}
                >
                  1
                </button>
                <button
                  disabled={videoId === 2}
                  onClick={() => handleChange(1)}
                  className={`${
                    videoId === 2 ? "text-black-200 bg-white" : ""
                  } hexagon-v font-Gustavo font-bold`}
                >
                  2
                </button>
              </div>
            )}
          </div>
          <div
            id={`titleShow${_id}`}
            className=" md:text-[62px] text-3xl font-semibold md:w-3/5 w-full md:translate-y-4 opacity-0"
          >
            <div className={styles.sectionHeadText}>{title1}</div>
            <div
              className={`text-end md:translate-y-5 ${styles.sectionHeadText}`}
            >
              {title2}
            </div>
          </div>
        </div>
        <div
          className={`flex ${
            _id === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } flex-col-reverse md:mt-28 mt-10`}
        >
          <div
            className={`md:w-2/5 w-full ${
              _id === 1 || _id === 2
                ? "md:flex md:flex-col md:items-end md:[&>p]:text-end"
                : ""
            }`}
          >
            <ul
              style={{ listStyleType: "circle" }}
              className=" text-gray-200 max-sm:mt-12 md:w-4/5 w-full mb-10"
            >
              {pText.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <CustomButton
              href={btnUrl}
              text={btnText}
              width={200}
              height={60}
            />
          </div>

          <Parallax speed={3} className="md:w-3/5 wh-full">
            <div className="w-full md:h-[22rem] h-48 relative">
              <div className="octagon skill-card-bg2 p-[0.05rem] opacity-75">
                <div className="octagon overflow-hidden">
                  <video
                    key={_id}
                    ref={videoRef}
                    id={`video${_id}`}
                    className="pointer-events-none"
                    preload="auto"
                    playsInline={true}
                    muted
                    onLoadedMetadata={() => setLoadedData(true)}
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                </div>
              </div>
              <div
                id={`videoShow${_id}`}
                className="absolute bottom-0 left-0 right-0 wh-full bg-primary"
              />
            </div>
            <div className="md:mt-16 mt-4">
              <div className="m-auto w-fit flex flex-col group relative">
                <a
                  className="octagon py-2 max-w-fit text-lg inline-flex items-center text-blue-600 hover:cursor-pointer"
                  href={link}
                  target="_blank"
                >
                  <span className="me-4">Visit website</span>{" "}
                  <FaArrowUpRightFromSquare />
                </a>
                <span className="w-0 absolute bottom-0 h-[.15rem] bg-blue-600 rounded-full group-hover:w-full group-hover:right-0 transition-all duration-300" />
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
};
export default ShowcaseProject;
