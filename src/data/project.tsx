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
    name: "ChatBot",
    description:
      "A simple AI chatbot built using JavaScript and the Gemini API.",
    image: "/projects/chatbot.png",
    github: "https://github.com/saurabh-xd/chatbot",
    live: "https://chatbot-saurabh.vercel.app",
    completedOn: "June 2024",
    tags: ["AI", "Frontend"],
    tech: [
      { name: "Node.js", icon: <NodeJs /> },
      { name: "Express.js", icon: <ExpressJs /> },
      { name: "React", icon: <ReactIcon /> },
      { name: "Mongodb", icon: <MongoDB /> },
      { name: "Javascript", icon: <JavaScript/> },
    ],
  },

  {
    name: "ChatMate",
    description:
      "A real-time chat application built using MERN stack and WebSockets.",
    image: "/projects/chatmate.png",
    github: "https://github.com/saurabh-xd/chatmate",
    live: "https://chatmate-app.vercel.app",
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
  },

  {
    name: "TypeZen",
    description:
      "A modern landing page built using Next.js, Tailwind CSS, and Framer Motion. ",
    image: "/projects/landing.png",
    github: "https://github.com/saurabh-xd/typezen",
    live: "https://typezen.vercel.app",
    completedOn: "August 2024",
    tags: [ "Frontend", "Landing Page"],
    tech: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "React", icon: <ReactIcon /> },
       { name: "Typescript", icon: <TypeScript /> },
      { name: "Tailwind CSS", icon: <TailwindCss /> },
    ],
  },

  {
    name: "ProjectFolio",
    description:
      "A platform where developers can upload their projects, explore others' work, and leave reviews. ",
    image: "/projects/projectfolio.png",
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
  },
];