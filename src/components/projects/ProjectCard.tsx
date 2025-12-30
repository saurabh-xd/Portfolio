"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

import { GithubIcon } from '../icons/GithubIcon'
import { motion } from 'motion/react'
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { Live } from "../icons/Live"



// Define proper TypeScript interface
interface Project {
  name: string;
  description: string;
  image: string;
  github: string;
  live?: string;
  tech: { name: string; icon: React.ReactNode }[];
   tags?: string[];
  completedOn?: string;
  completed: boolean;
}

interface ProjectCardProps {
  project: Project; 
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps ) {
  return (
    <Card className='overflow-hidden hover:shadow-lg border transition-all group pt-0 pb-4 rounded-xl bg-background '>

      {/* Card Header - Fixed image sizing */}
      <CardHeader className="p-0">
        <motion.div
        initial={{opacity: 0, filter: "blur(10px)", y: 10}}
        whileInView={{opacity: 1, filter: "blur(0px)", y: 0}}
        transition={{
          duration: 0.3,
          delay: index * 0.1,
          ease: "easeInOut"
        }}
        viewport={{once: true}}

        className='relative w-full md:h-60 h-48 overflow-hidden '>
          <Image 
            src={project.image} 
            alt={`${project.name} screenshot`}
             width={1920}
            height={1080}
            className='w-full h-full object-cover'

          />
        </motion.div>
      </CardHeader>



      {/* Card Content */}
      <CardContent className='p-4 pt-0 space-y-2'>
        <div className='flex justify-between items-start mb-3'>
          <h3 className='text-xl font-semibold'>{project.name}</h3>

{/* Links */}

{project.completed   && (      <div className='flex gap-3 items-center'>

{project.live && (
    
     <Tooltip>
          <TooltipTrigger>
        <Link 
          href={project.live}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`View ${project.name} live demo`}
          className='text-neutral-400 hover:text-primary transition-colors'
        >
          {/* <Globe className='w-5 h-5' /> */}
          <Live />
        </Link>
        </TooltipTrigger>
         <TooltipContent>
        <p className="font-bold">Live Preview</p>
      </TooltipContent>
        </Tooltip>
)}
       


        <Tooltip>
        <TooltipTrigger>
        <Link 
          href={project.github}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`View ${project.name} on GitHub`}
          className='text-neutral-400 hover:text-primary transition-colors'
        >
          <GithubIcon className='w-5 h-5' />
        </Link>
          </TooltipTrigger>
         <TooltipContent>
        <p className="font-bold">Github</p>
      </TooltipContent>
        </Tooltip>


          </div>
)
}
       
        </div>

        

       

        <p className='text-muted-foreground text-sm'>{project.completed
          ? project.description : 
          "This project is currently under development. Details coming soon."}</p>



        

      </CardContent>

      

      {/* Card Footer - Tech Stack */}
      <CardFooter className='flex items-start flex-col p-4 pt-0'>

     <h2 className="text-xs text-foreground/80 uppercase tracking-wide mb-2">Tech-stack</h2>
        <div className="flex justify-between w-full">
  
    <div className="flex gap-3">
        {project.tech.map((tech, techIdx) => (
          <Tooltip key={techIdx}>
        <TooltipTrigger>
           <div className="size-6 hover:scale-110 transition-all duration-300 hover:cursor-pointer">
        {tech.icon}
          </div>
          </TooltipTrigger>
         <TooltipContent>
        <p className="font-bold">{tech.name}</p>
      </TooltipContent>
        </Tooltip>
        ))}

        </div>

        
          <div
            className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
              project.completed
                ? 'border-green-300 bg-green-500/10'
                : 'border-red-300 bg-red-500/10'
            }`}
          >
            {project.completed ? (
              <>
                <div className="size-2 animate-pulse rounded-full bg-green-500" />
                Completed
              </>
            ) : (
              <>
                <div className="size-2 animate-pulse rounded-full bg-red-500" />
                In Progress
              </>
            )}
          </div>

        </div>

        

           
          
       
      </CardFooter>
    </Card>
  )
}

export default ProjectCard