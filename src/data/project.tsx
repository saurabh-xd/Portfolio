import ExpressJs from "@/components/icons/devIcons/ExpressIcon";
import JavaScript from "@/components/icons/devIcons/JavaScript";
import MongoDB from "@/components/icons/devIcons/MongoIcon";
import NextJs from "@/components/icons/devIcons/NextIcon";
import NodeJs from "@/components/icons/devIcons/NodejsIcon";
import ReactIcon from "@/components/icons/devIcons/ReactIcon";
import Shadcn from "@/components/icons/devIcons/ShadcnIcon";
import SocketIo from "@/components/icons/devIcons/Socket";
import TailwindCss from "@/components/icons/devIcons/TailwindIcon";
import TypeScript from "@/components/icons/devIcons/TypScriptIcon";
import Html from "@/components/icons/devIcons/Html";
import Css from "@/components/icons/devIcons/Css";

export interface TechStack {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  github: string;
  live: string;
  completedOn: string;
  tags: string[];
  tech: TechStack[];
  
}

export const projects = [
 
  {
    name: "TypeZen",
    description:
      "A modern and fully responsive landing page built with Next.js, Tailwind CSS, and Motion animations.",
    image: "/projects/landing.jpg",
    github: "https://github.com/saurabh-xd/typezen",
    live: "https://typezen-tau.vercel.app/",
    completedOn: "August 2024",
    tags: [ "Frontend", "Landing Page"],
    tech: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "React", icon: <ReactIcon /> },
       { name: "Typescript", icon: <TypeScript /> },
      { name: "Tailwind CSS", icon: <TailwindCss /> },
    ],
    completed: true,
  },

  {
    name: "ChatMate",
    description:
      "A real-time chat application built using MERN stack and WebSockets.",
    image: "/projects/chatmate.jpg",
    github: "https://github.com/saurabh-xd/chatmate",
    live: "https://chat-app-rho-jet.vercel.app",
    completedOn: "April 2024",
    tags: ["Real-time", "Full Stack"],
    tech: [
      { name: "Node.js", icon: <NodeJs /> },
      { name: "Express.js", icon: <ExpressJs /> },
      { name: "React", icon: <ReactIcon /> },
      { name: "Mongodb", icon: <MongoDB /> },
      { name: "Tailwind CSS", icon: <TailwindCss /> },
      { name: "Socket.IO", icon: <SocketIo /> },
    ],
    completed: true,
  },

  

   {
    name: "LearnMusic",
    description:
      "A modern music course landing page built with Next.js, TypeScript, Tailwind CSS, and Aceternity UI",
    image: "/projects/chatbot.jpg",
    github: "https://github.com/saurabh-xd/LearnMusic",
    live: "https://learn-music-school.vercel.app/",
    completedOn: "June 2024",
    tags: ["Landing page", "Frontend"],
     tech: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "React", icon: <ReactIcon /> },
       { name: "Typescript", icon: <TypeScript /> },
      { name: "Tailwind CSS", icon: <TailwindCss /> },
    ],
    completed: true,
  },

  {
    name: "ProjectFolio",
    description:
      "A platform where developers can upload their projects, explore others' work, and leave reviews. ",
    image: "/projects/projectfolio.jpg",
    github: "https://github.com/saurabh-xd/projectfolio",
    live: "https://projectfolio.vercel.app",
    completedOn: "October 2024",
    tags: ["Full Stack", "Platform"],
    tech: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "React", icon: <ReactIcon /> },
      { name: "Typescript", icon: <TypeScript /> },
      { name: "Tailwind CSS", icon: <TailwindCss /> },
      { name: "Mongodb", icon: <MongoDB /> },
      { name: "Shadcn", icon: <Shadcn /> },
    ],
    completed: false,
  },
  {
    name: "React-Projects",
    description:
      "A collection of React projects made while learning core concepts like components, hooks, and UI patterns ",
    image: "/projects/react-js.jpg",
    github: "https://github.com/saurabh-xd/react-projects",
    completedOn: "October 2024",
    tags: ["Frontend"],
    tech: [
    { name: "React", icon: <ReactIcon /> },
    { name: "JavaScript", icon: <JavaScript /> },
    { name: "Tailwind CSS", icon: <TailwindCss /> },
  ],
    completed: true,
  },
  {
    name: "Javascript-Projects",
    description:
      "A set of JavaScript mini-projects made while learning fundamentals, logic building, and DOM manipulation",
    image: "/projects/javascript.png",
    github: "https://github.com/saurabh-xd/Javascript-Projects",
    completedOn: "October 2024",
    tags: ["Frontend"],
    tech: [
    { name: "HTML", icon: <Html/> },
    { name: "CSS", icon: <Css /> },
    { name: "JavaScript", icon: <JavaScript /> },
  ],
    completed: true,
  },
];