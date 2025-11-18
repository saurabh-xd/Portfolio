import React from 'react'

import Image from 'next/image';
import { Globe } from 'lucide-react';
import Link from 'next/link';
import Container from '../Container';
import { GithubIcon } from '../icons/GithubIcon';
import ProjectCard from './ProjectCard';

import { MongooseIcon } from '../icons/devIcons/MongooseIcon';
import NodeJs from '../icons/devIcons/NodejsIcon';
import ExpressJs from '../icons/devIcons/ExpressIcon';
import ReactIcon from '../icons/devIcons/ReactIcon';
import MongoDB from '../icons/devIcons/MongoIcon';
import TailwindCss from '../icons/devIcons/TailwindIcon';
import NextJs from '../icons/devIcons/NextIcon';

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



function Projects() {
  return (
   <section className='py-16'>

    <Container>
   
      <div className=' max-w-md mx-auto py-2 flex flex-col items-center justify-center gap-2  rounded-md mb-8 '>
        <h2 className='text-4xl font-bold '>Projects</h2>
        <p className='text-lg font-semibold text-neutral-400'>Things I’ve Shipped & Cooked</p>
      </div>


      <div className='grid grid-cols-2 gap-6'>

        {
          projects.map((project,idx)=>(

            <ProjectCard key={project.name} index={idx} project={project}/> 


          ))



        }

      </div>

</Container>
   </section>
  )
}

export default Projects