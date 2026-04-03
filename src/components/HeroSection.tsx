import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import portfolio from "@/data/portfolio";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  whatsapp: MessageCircle,
};

const HeroSection = () => {
  return (
    <section className="flex min-h-[70vh] items-center pt-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-5 mb-4">
            <Avatar className="h-20 w-20 border-2 border-primary/50">
              <AvatarImage 
                src={portfolio.avatar.startsWith("http") || portfolio.avatar.startsWith("/") || portfolio.avatar.startsWith("data:") 
                  ? portfolio.avatar 
                  : `${import.meta.env.BASE_URL}${portfolio.avatar}`} 
                alt={portfolio.name} 
              />
              <AvatarFallback className="bg-primary/20 text-primary text-2xl font-heading">
                {portfolio.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-heading text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {portfolio.name}
              </h1>
              <p className="mt-1 font-heading text-lg font-medium text-primary">
                {portfolio.title}
              </p>
            </div>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {portfolio.bio}
          </p>
          <div className="mt-8 flex items-center gap-5">
            {portfolio.socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
