import {
  bootstrapLogo,
  claudinaryLogo,
  communicationLogo,
  cssLogo,
  datastructureLogo,
  expressLogo,
  gitLogo,
  gsapLogo,
  htmlLogo,
  jqueryLogo,
  jsLogo,
  laravelLogo,
  mongodbLogo,
  mysqlLogo,
  nodeLogo,
  phpLogo,
  postmanLogo,
  problemLogo,
  reactLogo,
  restfullLogo,
  tailwindLogo,
  tanstackLogo,
  teachingLogo,
  threeLogo,
  thunderclientLogo,
  vscodeLogo,
  twitterVideoSrc,
  appleVideoSrc,
  brainwaveVideoSrc,
  project2Img,
  project3Img,
  project1Img,
  gtLogo,
  wgcLogo,
  tuLogo,
  lcLogo,
  cLogo,
  ibmLogo
} from "../utils";

export const navLinkItems = [
  {
    _id: 0,
    name: "Overview",
    path: "overview",
  },
  {
    _id: 1,
    name: "About",
    path: "about",
  },
  {
    _id: 2,
    name: "Skills",
    path: "skills",
  },
  {
    _id: 3,
    name: "Projects",
    path: "projects",
  },
  {
    _id: 4,
    name: "Educations",
    path: "educations",
  },
  {
    _id: 5,
    name: "Resume",
    mobileOnly: true,
    type: "button",
    path: null,
  },
];

export const frontendSkills = [
  {
    _id: 0,
    name: "React",
    icon: reactLogo,
  },
  {
    _id: 1,
    name: "Tanstack query",
    icon: tanstackLogo,
  },
  {
    _id: 2,
    name: "jQuery",
    icon: jqueryLogo,
  },
  {
    _id: 3,
    name: "Tailwindcss",
    icon: tailwindLogo,
  },
  {
    _id: 4,
    name: "Gsap",
    icon: gsapLogo,
  },

  {
    _id: 5,
    name: "Threejs",
    icon: threeLogo,
  },
  {
    _id: 6,
    name: "Bootstrap",
    icon: bootstrapLogo,
  },

  {
    _id: 7,
    name: "Javascript",
    icon: jsLogo,
  },
  {
    _id: 8,
    name: "HTML5",
    icon: htmlLogo,
  },
  {
    _id: 9,
    name: "CSS3",
    icon: cssLogo,
  },
];

export const backenedSkills = [
  {
    _id: 0,
    name: "Nodejs",
    icon: nodeLogo,
  },
  {
    _id: 1,
    name: "Expressjs",
    icon: expressLogo,
  },
  {
    _id: 2,
    name: "Javascript",
    icon: jsLogo,
  },
  {
    _id: 3,
    name: "PHP",
    icon: phpLogo,
  },
  {
    _id: 4,
    name: "C",
    icon: cLogo,
  },
  {
    _id: 5,
    name: "MongoDB",
    icon: mongodbLogo,
  },

  {
    _id: 6,
    name: "Mysql",
    icon: mysqlLogo,
  },
  {
    _id: 7,
    name: "Laravel",
    icon: laravelLogo,
  },

  {
    _id: 8,
    name: "REST",
    icon: restfullLogo,
  },
  {
    _id: 9,
    name: "DSA",
    icon: datastructureLogo,
  },
];

export const otherSkills = [
  {
    _id: 0,
    name: "vscode",
    icon: vscodeLogo,
  },
  {
    _id: 1,
    name: "Git",
    icon: gitLogo,
  },
  {
    _id: 2,
    name: "Postman",
    icon: postmanLogo,
  },
  {
    _id: 3,
    name: "Thunderclient",
    icon: thunderclientLogo,
  },
  {
    _id: 4,
    name: "Problem solving",
    icon: problemLogo,
  },
  {
    _id: 5,
    name: "Communication",
    icon: communicationLogo,
  },
  {
    _id: 6,
    name: "Teaching",
    icon: teachingLogo,
  },

  {
    _id: 7,
    name: "Determination & Adaptability",
    icon: null,
  },
];

export const showcaseProjects = [
  {
    _id: 0,
    subtitle1: "BACKEND",
    subtitle2: "DEVELOPMENT",
    title1: "FULLSTACK",
    title2: "TWITTER CLONE",
    pText:
      "A Twitter replica constructed using MERN Tech-stack. Tanstack query for data retrieval and cache on the client side. Claudinary API is used to store images on the backend. I learned more about full-stack development while building it.",
    btnText: "Source code",
    btnUrl: "https://github.com/MkdirRaiden/twitter-clone.git",
    link: "https://twitter-clone-b6ie.onrender.com",
    video: twitterVideoSrc,
  },
  [
    {
      _id: 1,
      subtitle1: "FRONTEND",
      subtitle2: "DEVELOPMENT",
      title1: "HOMEPAGE",
      title2: "APPLE CLONE",
      pText:
        "Built and designed the Apple website landing page. Tech-stack used React, Tailwind CSS for UI/UX design, and Gasp for cool animation. I now have a better understanding of how to design a cool landing page.",
      btnText: "Source code",
      btnUrl: "https://github.com/MkdirRaiden/Apple-iPhone-Clone.git",
      link: "https://apple-iphone-clone-rmr6.onrender.com",
      video: appleVideoSrc,
    },
    {
      _id: 2,
      subtitle1: "FRONTEND",
      subtitle2: "DEVELOPMENT",
      title1: "AI POWERED",
      title2: "BRAINWAVE",
      pText:
        "Built and designed an interactive modern landing page. Tech-stack used React, Tailwind CSS for UI/UX design, and Gasp for cool animation. I now have a better understanding of how to design a cool landing page.",
      btnText: "Source code",
      btnUrl: "https://github.com/MkdirRaiden/Brainwave-.git",
      link: "https://brainwave-lj6w.onrender.com",
      video: brainwaveVideoSrc,
    },
  ],
];

export const moreProjects = [
  {
    _id: 0,
    name: "React redux and RTK",
    description:
      "A React react powered app, integrated with react-redux, RTK toolkit for global state management.",
    image: project1Img,
    link: "https://mkdirraiden.github.io/e-plant-shopping/",
  },
  {
    _id: 1,
    name: "PHP mysql website",
    description:
      "A simple portfolio website built using PHP, Bootstrap, jQuery, mysql, html and css.",
    image: project3Img,
    link: "http://myphpecommerce.infinityfreeapp.com/",
  },
  {
    _id: 2,
    name: "React frontend design",
    description:
      "A React tailwind website that I've built from scratch to gain a grasp of how React works.",
    image: project2Img,
    link: "https://mkdirraiden.github.io/React-project02/",
  },
];

export const experienceEducation = [
  {
    _id: 0,
    name: "Geekworkx Technology",
    address: "Guwahati, Assam",
    icon: gtLogo,
    desc: "Worked as an application developer for about half a year building dynamic website. Learned jQuery, PHP and mysql along the process",
    type: "experience",
    date: "2023-2024",
  },
  {
    _id: 1,
    name: "Fundamentals of web development",
    icon: ibmLogo,
    address: "IBM SkillsBuild",
    desc: `Completed web development fundamentals from IBM skillsBuild free online course and earned a credential badge. Badge link provided below.`,
    type: "education",
    date: "2025",
    link: "https://www.credly.com/badges/bfe91ce2-4dc9-4260-9b5d-72ce4f7ee345/public_url"
  },
  {
    _id: 2,
    name: "Javascript",
    icon: lcLogo,
    address: "Online Course",
    desc: "Has solved the 30 days javascript challenge on leetcode. It broadened my knowledge in javascript.",
    type: "education",
    date: "2024",
  },
  {
    _id: 3,
    name: "Tezpur University",
    icon: tuLogo,
    address: "Tezpur, Assam",
    desc: "Studied Bachelor of Technology in Computer Science & Engineering at Tezpur University.",
    type: "education",
    date: "2017-2019",
  },
  {
    _id: 4,
    name: "West Goalpara College",
    icon: wgcLogo,
    address: "Goalpara, Assam",
    desc: "Studied H.S. Science stream at West Goalpara College scoring over 86 percentage.",
    type: "education",
    date: "2013-2015",
  },
];
