import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/projects/");

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="font-heading text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors">
          {isProjectPage ? (
            <span className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Back
            </span>
          ) : (
            "portfolio."
          )}
        </Link>
        {!isProjectPage && (
          <a
            href="#projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;
