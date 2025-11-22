import React from 'react'
import JavaScript from '../icons/devIcons/JavaScript'
import ReactIcon from '../icons/devIcons/ReactIcon'
import NodeJs from '../icons/devIcons/NodejsIcon'
import MongoDB from '../icons/devIcons/MongoIcon'
import NextJs from '../icons/devIcons/NextIcon'
import TailwindCss from '../icons/devIcons/TailwindIcon'
import TypeScript from '../icons/devIcons/TypScriptIcon'
import BootStrap from '../icons/devIcons/Bootstrap'
import Vercel from '../icons/devIcons/Vercel'
import Postman from '../icons/devIcons/Postman'
import Shadcn from '../icons/devIcons/ShadcnIcon'
import ExpressJs from '../icons/devIcons/ExpressIcon'
import SocketIo from '../icons/devIcons/Socket'
import Git from '../icons/devIcons/Git'
import Chatgpt from '../icons/devIcons/Chatgpt'
import { MongooseIcon } from '../icons/devIcons/MongooseIcon'
import Redux from '../icons/devIcons/Redux'
import Npm from '../icons/devIcons/Npm'
import C from '../icons/devIcons/C'
import Cplus from '../icons/devIcons/C++'
import Vscode from '../icons/devIcons/Vscode'
import Notion from '../icons/devIcons/Notion'
import Java from '../icons/devIcons/Java'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { SkillCard } from './skillcard'


const skillCategories = [

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

function Skills() {
  return (
    <section className='my-14'>
       
            <h2 className='text-3xl  font-semibold'>Skills & Tools</h2>

          <div className='flex flex-col gap-6 mt-6'>
            {
              skillCategories.map((category,idx)=>(

                <div key={category.title} className='flex flex-col gap-1'>
                  <h2 className='text-lg text-foreground/80 font-medium'>{category.title}</h2>

                  <div className='flex gap-6'>
                    {category.skills.map((skill,idx)=>(


                         <div key={skill.name} >
                          <SkillCard name={skill.name} icon={skill.icon} />

                         </div>

                    ))}
                  </div>

                 </div>

              ))
            }
          </div>
        
    </section>
  )
}

export default Skills