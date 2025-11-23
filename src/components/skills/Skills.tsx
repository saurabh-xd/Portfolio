import { SkillCard } from './skillcard'
import { skillCategories } from '@/data/skillsdata'



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