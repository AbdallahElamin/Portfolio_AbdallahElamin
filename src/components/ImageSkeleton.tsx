import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const ImageSkeleton = ({ src, alt, className, onClick }: ImageSkeletonProps) => {
  const [loaded, setLoaded] = useState(false);

  // Auto-resolve relative public paths for GitHub Pages / custom base URLs
  const resolvedSrc = src.startsWith("http") || src.startsWith("/") || src.startsWith("data:") 
    ? src 
    : `${import.meta.env.BASE_URL}${src}`;

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)} onClick={onClick}>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted-foreground/10 to-muted animate-shimmer bg-[length:200%_100%]" />
      )}
      <img
        src={resolvedSrc}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};

export default ImageSkeleton;
