import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDatabase,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import portfolio from '../assets/portfolio.png'
import restaura from '../assets/restaura.png'


import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
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
  name: "Mohammad Kaif",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Full Stack Web Developer with a talent for crafting dynamic, scalable, and seamless web applications. With expertise spanning frontend aesthetics and backend architecture, I bring ideas to life by delivering innovative and user-centric digital solutions. Whether it's designing intuitive interfaces or building robust server-side systems, I thrive on transforming challenges into impactful web experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: portfolio,
    githubLink: "https://github.com/Kaifffff/personal-portfolio",
  },
  {
    id: 2,
    name: "mern-auth",
    description:
      "Developed a secure authentication application using React, Node.js, and MongoDB, integrating Google OAuth for seamless login and registration. Focused on creating a user-friendly UI, optimizing backend performance, and ensuring robust data security.",
    image: projectImage2,
    githubLink: "https://github.com/Kaifffff/mern-auth",
  },
  {
    id: 3,
    name: "restaurant-website",
    description:
      "Designed and developed a responsive restaurant website using React and Tailwind CSS. Featured sections like Hero, Dishes, About, and Contact with engaging layouts. Integrated smooth scrolling, animations with Framer Motion, and a mobile-friendly navigation bar for enhanced user experience.",
    image: restaura,
    githubLink: "https://github.com/Kaifffff/restaura",
  },
];

export const BIO = [
  "I am a self-motivated and quick learner with a strong analytical mindset and a passion for technology. With a solid foundation in JavaScript, TypeScript, and Java, I specialize in creating intuitive and responsive web applications using modern frameworks like React.js, Node.js, and Express.js. My skills include implementing efficient databases using SQL, MySQL, and MongoDB, alongside expertise in tools like Git, Redux Toolkit, and Firebase.",
  "I am currently pursuing a Bachelor of Technology in Computer Science at CSMSS Shahu College of Engineering, Aurangabad, with a CGPA of 7.0. I have successfully completed internships and personal projects that demonstrate my technical skills and problem-solving abilities, such as a secure authentication application and an interactive portfolio website.",
  "Driven by a passion for innovation and user-centric solutions, I thrive in collaborative environments and adapt quickly to new challenges. When I'm not coding, I enjoy traveling, photography, and exploring the world of sports.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <FaDatabase className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MySQL",
    experience: "2+ years",
  },
  {
    icon: (
      <div className="text-4xl text-gray-500 lg:text-5xl font-bold">
        Ex
      </div>
    ),
    name: "Express.js",
    experience: "2+ years",
  },
  {
    icon: (
      <div className="text-4xl text-blue-500 lg:text-5xl font-bold">
        API
      </div>
    ),
    name: "REST API",
    experience: "2+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Frontend Developer Intern",
    company: "Cognifyz Technologies Pvt. Ltd.",
    duration: "July 2024 - August 2024",
    description:
      "Developed utility programs such as a temperature converter, palindrome checker, student grade calculator, random password generator, Tic-Tac-Toe game, password strength checker, and file encryption/decryption tool. Leveraged Java to enhance problem-solving and programming skills, focusing on creating effective and functional applications.",
},
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "CSMSS Shahu College of Engineering, Aurangabad",
    duration: "July 2021 - June 2025",
    description:
      "Focused on core computer science subjects, including data structures, algorithms, and database management systems. Worked on projects involving web development, software engineering, and responsive design. Achieved a CGPA of 7.0/10 and honed skills in modern web technologies like React.js and Node.js.",
},
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/kaifffx3?igsh=bzN4bXZqNDZxaXps&utm_source=qr",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Kaifffff",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/mohammad-kaif-731738230/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
