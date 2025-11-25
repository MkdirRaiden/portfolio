import twitterVideoSrc from "/videos/twitter.mp4";
import appleVideoSrc from "/videos/apple.mp4";
import brainwaveVideoSrc from "/videos/brainwave.mp4";

import project2Img from "/images/more-projects/project2.gif";
import project1Img from "/images/more-projects/project1.gif";
import project3Img from "/images/more-projects/project3.gif";

export const showcaseProjects = [
    {
        _id: 0,
        subtitle1: "BACKEND",
        subtitle2: "DEVELOPMENT",
        title1: "FULLSTACK",
        title2: "TWITTER CLONE",
        pText: ["Built a social media platform using MERN stack, Tanstack Query, TailwindCSS, and Cloudinary API, enabling userauthentication and media uploads.", "Achieved 90% mobile compatibility and reduced API call times by 20%"],
        btnText: "Source code",
        btnUrl: "https://github.com/MkdirRaiden/twitter-clone-backend.git",
        link: "https://twitter-clone-client-gray.vercel.app/",
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