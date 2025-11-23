import BootStrap from "@/components/icons/devIcons/Bootstrap";
import Chatgpt from "@/components/icons/devIcons/Chatgpt";
import ExpressJs from "@/components/icons/devIcons/ExpressIcon";
import Git from "@/components/icons/devIcons/Git";
import JavaScript from "@/components/icons/devIcons/JavaScript";
import MongoDB from "@/components/icons/devIcons/MongoIcon";
import { MongooseIcon } from "@/components/icons/devIcons/MongooseIcon";
import NextJs from "@/components/icons/devIcons/NextIcon";
import NodeJs from "@/components/icons/devIcons/NodejsIcon";
import Notion from "@/components/icons/devIcons/Notion";
import Npm from "@/components/icons/devIcons/Npm";
import Postman from "@/components/icons/devIcons/Postman";
import ReactIcon from "@/components/icons/devIcons/ReactIcon";
import Redux from "@/components/icons/devIcons/Redux";
import Shadcn from "@/components/icons/devIcons/ShadcnIcon";
import SocketIo from "@/components/icons/devIcons/Socket";
import TailwindCss from "@/components/icons/devIcons/TailwindIcon";
import TypeScript from "@/components/icons/devIcons/TypScriptIcon";
import Vercel from "@/components/icons/devIcons/Vercel";
import Vscode from "@/components/icons/devIcons/Vscode";

export const skillCategories = [

  {
    title: 'Frontend',
    skills: [
       { name: 'JavaScript', icon: <JavaScript /> },
         { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'Redux', icon: <Redux /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
      { name: 'Bootstrap', icon: <BootStrap /> },
      { name: 'shadcn/ui', icon: <Shadcn /> },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <NodeJs /> },
      { name: 'Express.js', icon: <ExpressJs /> },
      { name: 'MongoDB', icon: <MongoDB /> },
      { name: 'Mongoose', icon: <MongooseIcon /> },
      { name: 'Socket.io', icon: <SocketIo /> },
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <Git /> },
      { name: 'VS Code', icon: <Vscode /> },
      { name: 'Postman', icon: <Postman /> },
      { name: 'Vercel', icon: <Vercel /> },
      { name: 'NPM', icon: <Npm /> },
      { name: 'Notion', icon: <Notion /> },
      { name: 'ChatGPT', icon: <Chatgpt /> },
    ]
  }
]