import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function SkillCard({ name, icon }:{name: string, icon: React.ReactNode}) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="bg-card md:p-2 p-1.5 rounded-md border border-border border-dashed hover:scale-110 transition duration-300">
          <div className="md:size-8 size-6">{icon}</div>
        </div>
      </TooltipTrigger>
      <TooltipContent>{name}</TooltipContent>
    </Tooltip>
  );
}
