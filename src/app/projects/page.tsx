'use client'
import Container from '@/components/common/Container'
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/project';
import { useState } from 'react';

const countByTag = (tag: string)  =>
  projects.filter(p => p.tags.includes(tag)).length;

const categories = [
  { label: 'All', value: 'All', count: projects.length },
  { label: 'Frontend', value: 'Frontend', count: countByTag('Frontend') },
  { label: 'Fullstack', value: 'Fullstack', count: countByTag('Full Stack') },
];



function page() {
const [activeCategory, setActiveCategory] = useState('All');


 const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(project =>
          activeCategory === 'Frontend'
            ? project.tags.includes('Frontend')
            : project.tags.includes('Full Stack')
        );

  return (
    <div>
         <Container className='py-24'>
   
      <div className=' max-w-md mx-auto py-2 flex flex-col items-center justify-center gap-2  rounded-md mb-8 '>
        <h2 className='text-4xl font-bold '>Projects</h2>
        <p className='text-lg font-semibold text-neutral-400'>Things I’ve Shipped & Cooked</p>
      </div>


  {/*  Categories */}
      <div className="flex justify-center gap-3 flex-wrap mb-12">
        {categories.map(category => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`px-3 py-1.5 text-xs rounded-sm  transition cursor-pointer border-border border
              ${
                activeCategory === category.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'
              }`}
          >
            {category.label}
            <span className='ml-1 text-xs opacity-70'>
              ({category.count})
            </span>
          </button>
        ))}
      </div>


      <div className='grid grid-cols-2 gap-6'>

        {
          filteredProjects.map((project,idx)=>(

            <ProjectCard key={project.name} index={idx} project={project}/> 


          ))



        }

      </div>

      

</Container>
    </div>
  )
}

export default page