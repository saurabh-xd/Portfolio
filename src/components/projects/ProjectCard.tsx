"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { GithubIcon } from '../icons/GithubIcon'
import { motion } from 'motion/react'
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"



// Define proper TypeScript interface
interface Project {
  name: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tech: { name: string; icon: React.ReactNode }[];
   tags?: string[];
  completedOn?: string;
}

interface ProjectCardProps {
  project: Project; 
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps ) {
  return (
    <Card className='overflow-hidden hover:shadow-lg border  transition-all  group pt-0 rounded-md'>

      {/* Card Header - Fixed image sizing */}
      <CardHeader className='p-[1px]'>
        <motion.div
        initial={{opacity: 0, filter: "blur(10px)", y: 10}}
        whileInView={{opacity: 1, filter: "blur(0px)", y: 0}}
        transition={{
          duration: 0.3,
          delay: index * 0.1,
          ease: "easeInOut"
        }}

        className='relative w-full h-60 overflow-hidden rounded-t-sm'>
          <Image 
            src={project.image} 
            alt={`${project.name} screenshot`}
            fill
            className='object-cover'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </CardHeader>



      {/* Card Content */}
      <CardContent className='p-4 pt-0 space-y-6'>
        <div className='flex justify-between items-start mb-4'>
          <h3 className='text-xl font-semibold'>{project.name}</h3>


          {/* Links */}
          <div className='flex gap-3 items-center'>

            <Tooltip>
              <TooltipTrigger>
            <Link 
              href={project.live}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`View ${project.name} live demo`}
              className='hover:text-primary transition-colors'
            >
              <Globe className='w-5 h-5' />
            </Link>
            </TooltipTrigger>
             <TooltipContent>
        <p>Live Preview</p>
      </TooltipContent>
            </Tooltip>


            <Tooltip>
            <TooltipTrigger>
            <Link 
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`View ${project.name} on GitHub`}
              className='hover:text-primary transition-colors'
            >
              <GithubIcon className='w-5 h-5' />
            </Link>
              </TooltipTrigger>
             <TooltipContent>
        <p>Github</p>
      </TooltipContent>
            </Tooltip>


          </div>
        </div>

        {/* Tags */}
        {project.tags && (
          <div className="flex gap-2 flex-wrap">
               {
                project.tags.map((tag,idx)=>(
                  <span
                   key={idx}
                className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))
               }
          </div>
        )}

        <p className='text-muted-foreground text-sm'>{project.description}</p>



{/* Completion Date */}
        {project.completedOn && (
          <div className="text-xs text-muted-foreground">
            <span>Completed: </span>
            <span className="font-medium">{project.completedOn}</span>
          </div>
        )}

      </CardContent>

      

      {/* Card Footer - Tech Stack */}
      <CardFooter className=' flex flex-col items-start gap-2 pt-2'>
       <h2 className="text-xs text-foreground/60 uppercase tracking-wide">Tech-stack</h2>

        <div className="flex gap-2">
        {project.tech.map((tech, techIdx) => (
         <div key={techIdx} className="size-6 hover:scale-120 transition-all duration-300 hover:cursor-pointer">
            {tech.icon}
          </div>
        ))}

        </div>
         
       
      </CardFooter>
    </Card>
  )
}

export default ProjectCard