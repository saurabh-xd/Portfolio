import Container from '@/components/common/Container'
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/project';



function page() {
  return (
    <div>
         <Container className='pt-24'>
   
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
    </div>
  )
}

export default page