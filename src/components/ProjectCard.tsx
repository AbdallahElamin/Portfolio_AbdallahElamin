import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import ImageSkeleton from "./ImageSkeleton";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/projects/${project.id}`} className="group block">
        <div className="overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 group-hover:scale-[1.02] group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]">
          <ImageSkeleton
            src={project.images[0]}
            alt={project.title}
            className="aspect-video w-full"
          />
          <div className="p-5">
            <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {project.hook}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
