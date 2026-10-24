import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = "md", showText = true, className }: LogoProps) => {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };
  
  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link to="/" className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative", sizes[size])}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F5D4" />
              <stop offset="100%" stopColor="#FF41B4" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="45" stroke="url(#logoGrad)" strokeWidth="3" fill="none" filter="url(#glow)" />
          <path
            d="M30 35 C40 25, 60 25, 70 35 C65 45, 55 50, 50 55 C45 50, 35 45, 30 35 Z"
            stroke="url(#logoGrad)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M30 65 C40 75, 60 75, 70 65 C65 55, 55 50, 50 45 C45 50, 35 55, 30 65 Z"
            stroke="url(#logoGrad)"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="50" cy="50" r="4" fill="url(#logoGrad)" filter="url(#glow)" />
        </svg>
      </div>
      {showText && (
        <span className={cn("font-bold tracking-tight gradient-text", textSizes[size])}>
          FUMU
        </span>
      )}
    </Link>
  );
};

export default Logo;