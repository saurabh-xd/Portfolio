import { SkillCard } from "./skillcard";
import { skillCategories } from "@/data/skillsdata";

function Skills() {
  return (
    <section className="mt-18">
      <h2 className="text-2xl md:text-4xl font-bold">Skills & Tools</h2>

      <div className="flex flex-col gap-4 mt-6">
        {skillCategories.map((category, idx) => (
          <div key={category.title} className="flex flex-col gap-1">
            <h2 className="text-lg text-foreground/80 font-medium">
              {category.title}
            </h2>

            <div className="flex flex-wrap md:gap-4 gap-2">
              {category.skills.map((skill, idx) => (
                <div key={skill.name}>
                  <SkillCard name={skill.name} icon={skill.icon} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
