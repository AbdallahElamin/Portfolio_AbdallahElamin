import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ExternalLink, Github } from "lucide-react";
import portfolio from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ImageSkeleton from "@/components/ImageSkeleton";
import Lightbox from "@/components/Lightbox";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolio.projects.find((p) => p.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="container mx-auto px-6 pb-24 pt-24"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{project.hook}</p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-primary/30 text-primary bg-primary/5 font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl && (
            <Button asChild variant="outline" className="gap-2">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                View Source
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button asChild className="gap-2">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                Live Demo
              </a>
            </Button>
          )}
        </div>

        {/* Image Gallery */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {project.images.map((img, i) => (
            <ImageSkeleton
              key={i}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              className={`cursor-pointer rounded-lg ${i === 0 ? "sm:col-span-2 aspect-video" : "aspect-video"}`}
              onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
            />
          ))}
        </div>

        {/* Description */}
        <article className="prose prose-invert prose-sm mt-12 max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary">
          <ReactMarkdown>{project.description}</ReactMarkdown>
        </article>
      </div>

      <Lightbox
        images={project.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </motion.div>
  );
};

export default ProjectDetail;
