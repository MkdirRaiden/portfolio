import {
  cLogo,
  jsLogo,
  phpLogo,
  sqlLogo,
  bootstrapLogo,
  communicationLogo,
  cssLogo,
  datastructureLogo,
  expressLogo,
  gitLogo,
  gsapLogo,
  htmlLogo,
  jqueryLogo,
  laravelLogo,
  mongodbLogo,
  mysqlLogo,
  nodeLogo,
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

export const services = [
  { title: "C", icon: cLogo },
  { title: "JavaScript", icon: jsLogo },
  { title: "PHP", icon: phpLogo },
  { title: "SQL", icon: sqlLogo },
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
    name: " Adaptability",
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
    pText: ["Built a social media platform using MERN stack, Tanstack Query, TailwindCSS, and Cloudinary API, enabling userauthentication and media uploads.", "Achieved 90% mobile compatibility and reduced API call times by 20%"],
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
      pText: ["Designed a replica of Apple’s homepage using React, TailwindCSS, and GSAP animations, enhancing user experience.", "Optimized CSS files, reducing size by 30% for faster performance."],
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
        ["Designed and built a modern responsive webpage using React, TailwindCSS, and GSAP animations, enhancing user experience.", "Optimized CSS files, reducing size by 35% for faster performance."],
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
    name: "E-Plant Shopping Cart",
    description:
      "A React powered frontend app, integrated with react-redux, RTK toolkit for global state management.",
    image: project1Img,
    tech: ['#React', '#RTK', '#HTML', '#CSS'],
    link: "https://mkdirraiden.github.io/e-plant-shopping/",
  },

  {
    _id: 2,
    name: "Chat App",
    description:
      "A basic chat application built with vanilla JavaScript, Node.js, Express.js, and Socket.io for real-time communication.",
    image: project2Img,
    tech: ['#JavaScript', '#Nodejs', '#Socket.io'],
    link: "https://chat-app-i0p1.onrender.com",
  },
  {
    _id: 1,
    name: "PHP Website",
    description:
      "A simple portfolio website built using PHP, Bootstrap, jQuery, mysql, html and css for performing CRUD operation.",
    image: project3Img,
    tech: ['#PHP', '#mySql', '#jQuery', '#HTML', '#CSS'],
    link: "http://myphpecommerce.infinityfreeapp.com/",
  },
];

export const experienceEducation = [
  {
    _id: 0,
    name: "Applicaton Developer",
    address: "Geekworkx Technology, Guwahati",
    icon: gtLogo,
    desc: ["Developed 5+ dynamic webpages using PHP, MySQL, and jQuery, improving user engagement by 15%", "Collaborated with a team of 3 developers to implement responsive designs, ensuring cross-browser compatibility.", "Optimized database queries, reducing page load times by 10%."],
    type: "experience",
    date: "2023-2024",
  },
  {
    _id: 1,
    name: "Fundamentals of web development",
    icon: ibmLogo,
    address: "IBM SkillsBuild",
    desc: ["Took a web development fundamental course and learned software development.", "Got familiarity with SDLC, agile development and Cloud computing.", "https://www.credly.com/badges/bfe91ce2-4dc9-4260-9b5d-72ce4f7ee345/public_url"],
    type: "education",
    date: "2025"
  },
  {
    _id: 2,
    name: "Javascript",
    icon: lcLogo,
    address: "Online Course",
    desc: ["Has solved the 30 days javascript challenge on leetcode. It broadened my knowledge in javascript and data structures."],
    type: "education",
    date: "2024",
  },
  {
    _id: 3,
    name: "Tezpur University",
    icon: tuLogo,
    address: "Tezpur, Assam",
    desc: ["Studied Bachelor of Technology in Computer Science & Engineering at Tezpur University.", "Completed 50 credits in programming, web technologies, and database systems"],
    type: "education",
    date: "2017-2019",
  },
  {
    _id: 4,
    name: "West Goalpara College",
    icon: wgcLogo,
    address: "Goalpara, Assam",
    desc: ["Studied H.S. Science stream at West Goalpara College.", "Scored over 86% on board exam and secured letter marks on all six subjects."],
    type: "education",
    date: "2013-2015",
  },
];
