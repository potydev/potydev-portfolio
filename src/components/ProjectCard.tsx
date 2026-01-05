import { ArrowUpRight, Star } from "lucide-react";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  technologies?: string[];
  stats?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  url,
  technologies,
  stats,
}: ProjectCardProps) => {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-baseline font-medium leading-tight text-slate-light hover:text-primary focus-visible:text-primary group/link"
              aria-label={`${title} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {title}
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
              </span>
            </a>
          </h3>
          
          <p className="mt-2 text-sm leading-normal text-foreground">
            {description}
          </p>
          
          {stats && (
            <p className="mt-2 flex items-center gap-1 text-sm text-foreground">
              <Star className="h-4 w-4 text-primary" />
              {stats}
            </p>
          )}
          
          {technologies && technologies.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
              {technologies.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </ul>
          )}
        </div>
        
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="rounded border-2 border-border/10 transition group-hover:border-border/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          width={200}
          height={48}
        />
      </div>
    </li>
  );
};

export default ProjectCard;
