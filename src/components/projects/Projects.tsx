import React from 'react'

import Image from 'next/image';
import { Globe } from 'lucide-react';
import Link from 'next/link';
import Container from '../common/Container';
import { GithubIcon } from '../icons/GithubIcon';
import ProjectCard from './ProjectCard';


import { Button } from '../ui/button';
import { projects } from '@/data/project';


 


function Projects() {
  return (
   <section className='py-18'>

    <Container>
   
      <div className='  mb-6 '>
        <h2 className='text-4xl font-bold '>Projects</h2>
       
      </div>


      <div className='grid grid-cols-2 gap-6'>

        {
          projects.map((project,idx)=>(

            <ProjectCard key={project.name} index={idx} project={project}/> 


          ))



        }

      </div>

       <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/projects">Show all projects</Link>
        </Button>
      </div>

</Container>
   </section>
  )
}

export default Projects