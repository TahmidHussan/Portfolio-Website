import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import projectImage1 from "../assets/portfolio_project.jpg";
import projectImage2 from "../assets/theramotive_project.jpg";
import projectImage3 from "../assets/discordbot_project.jpg";

import { FaJava } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiPython,
  SiKotlin,
  SiCplusplus,
  SiHtml5,
  SiExpress,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Tahmid Hussan",
  greeting: "Hello there! 👋🏻",
  description:
    "I am a Computer Science senior at Queens College and a former Lead Software Engineer Intern at TheraMotive. I’m passionate about coding, traveling, basketball, and cars, and I strive to create meaningful technology that makes a difference.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React.js and Tailwind CSS to highlight my skills, projects, and contact information.",
    image: projectImage1, 
    githubLink: "https://github.com/user/personal-portfolio", 
  },
  {
    id: 2,
    name: "TheraMotive Dashboard",
    description:
      "A company dashboard built with Next.js, React.js, and MongoDB, designed to streamline operations and improve data management.",
    image: projectImage2, 
    githubLink: "https://github.com/user/theramotive-dashboard", 
  },
  {
    id: 3,
    name: "LeBron Discord Bot",
    description:
      "A Python-powered Discord bot that delivers motivational quotes and LeBron GIFs, enhancing engagement across multiple servers.",
    image: projectImage3, 
    githubLink: "https://github.com/TahmidHussan/Lebron-Discord-Bot", 
  },
];

export const BIO = [
  "I began my journey in computer science in August 2021 at CUNY Queens College, where I became a member of the Code For All club. During my time here, I have taken foundational and advanced courses such as Object-Oriented Programming in Java and C++, Advanced Programming in Python, Computer Architecture, and Data Structures and Algorithms, all of which strengthened my technical skills and passion for problem-solving.",
  "In February 2024, I participated in a CodePath course focused on Android Development. Over the course of three months, I learned the basics of creating Android applications using Kotlin and Android Studio. Shortly after, I secured a position as a Lead Software Engineer Intern at TheraMotive, a startup based in Brooklyn. There, I led a team of 10+ interns in designing and developing a company dashboard using Next.js, React.js, and MongoDB.",
  "I am currently completing my final classes at Queens College, with plans to graduate in December 2025. Alongside my studies, I am participating in CodePath's Technical Interview Prep course from February to April to prepare for technical interviews, while also planning and building a new full-stack application that combines my skills and passion for software development into an impactful project.",
];

export const SKILLS = [
  {
    icon: <SiHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML/CSS",
    experience: "2+ years",
  },
  {
    icon: <SiPython className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Python",
    experience: "2+ years",
  },
  {
    icon: <FaJava className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Java",
    experience: "2+ years",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "2+ years",
  },
  {
    icon: <SiCplusplus className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "C++",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ year",
  },
  {
    icon: <SiExpress className="text-4xl text-gray-400 lg:text-5xl" />,
    name: "Express.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ year",
  },
  {
    icon: <SiKotlin className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Kotlin",
    experience: "1+ year",
  },
];


export const EXPERIENCES = [
  {
    title: "Lead Software Engineer Intern",
    company: "TheraMotive",
    duration: "May 2024 - August 2024",
    description:
      "During my internship at TheraMotive, I led a team of over 10 interns to design and develop a company dashboard using Next.js, React.js, and MongoDB. I worked closely with cross-functional teams to implement key features such as real-time analytics, a customizable calendar, and user management tools. I also reviewed code submissions, facilitated collaboration among team members, and ensured that all project milestones were met on time while mentoring junior interns throughout the development process.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Arts in Computer Science",
    institution: "CUNY Queens College",
    duration: "August 2021 - December 2025",
    description:
      "During my studies, I have taken courses including Object-Oriented Programming in Java and C++, Advanced Programming in Python, Computer Architecture, and Data Structures and Algorithms.",
  },
  {
    degree: "Technical Interview Prep Course",
    institution: "CodePath",
    duration: "February 2025 - April 2025",
    description:
      "A comprehensive program designed to prepare students for technical interviews by focusing on solving data structures and algorithms problems, with hands-on mock interviews and problem-solving sessions.",
  },
  {
    degree: "Intro to Android Development",
    institution: "CodePath",
    duration: "February 2024 - April 2024",
    description:
      "An 8-week program where I learned the basics of creating Android applications using Kotlin and Android Studio. Successfully earned a certificate of completion.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/TahmidHussan",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/tahmidhussan/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
