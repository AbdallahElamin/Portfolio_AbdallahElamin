import { motion } from "framer-motion";
import portfolio from "@/data/portfolio";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />

      <section id="projects" className="container mx-auto px-6 pb-24">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Selected Work
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Index;
