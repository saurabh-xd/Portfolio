import ExpressJs from "@/components/icons/devIcons/ExpressIcon";
import MongoDB from "@/components/icons/devIcons/MongoIcon";
import NextJs from "@/components/icons/devIcons/NextIcon";
import NodeJs from "@/components/icons/devIcons/NodejsIcon";
import ReactIcon from "@/components/icons/devIcons/ReactIcon";
import TailwindCss from "@/components/icons/devIcons/TailwindIcon";

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
      "A simple AI chatbot built using JavaScript and the Gemini API. It responds to user prompts in real-time with intelligent answers.",
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
      { name: "Tailwind CSS", icon: <TailwindCss /> },
    ],
  },

  {
    name: "ChatMate",
    description:
      "A real-time chat application built using MERN stack and WebSockets. Supports instant messaging, typing indicators, and live user presence.",
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
    ],
  },

  {
    name: "TypeZen",
    description:
      "A modern landing page built using Next.js, Tailwind CSS, and Framer Motion. Includes smooth animations, responsive layout, and clean design.",
    image: "/projects/landing.png",
    github: "https://github.com/saurabh-xd/typezen",
    live: "https://typezen.vercel.app",
    completedOn: "August 2024",
    tags: ["UI/UX", "Frontend", "Landing Page"],
    tech: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "React", icon: <ReactIcon /> },
      { name: "Tailwind CSS", icon: <TailwindCss /> },
    ],
  },

  {
    name: "ProjectFolio",
    description:
      "A platform where developers can upload their projects, explore others' work, and leave reviews. Built using Next.js with a modern UI.",
    image: "/projects/projectfolio.png",
    github: "https://github.com/saurabh-xd/projectfolio",
    live: "https://projectfolio.vercel.app",
    completedOn: "October 2024",
    tags: ["Full Stack", "Platform"],
    tech: [
      { name: "Next.js", icon: <NextJs /> },
      { name: "React", icon: <ReactIcon /> },
      { name: "Tailwind CSS", icon: <TailwindCss /> },
      { name: "Mongodb", icon: <MongoDB /> },
    ],
  },
];