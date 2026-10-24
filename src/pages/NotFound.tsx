import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/fumu/Logo";
import { BackgroundEffects } from "@/components/fumu/BackgroundEffects";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-fumu relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="text-center animate-fade-in">
          <Logo size="lg" />
          <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
              <Link to="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/discover">Discover People</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}