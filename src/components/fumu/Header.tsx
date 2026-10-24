import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo size="md" />
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/matches" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Matches
            </Link>
            <Link to="/discover" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Discover
            </Link>
            <Link to="/crushes" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Crushes
            </Link>
            <Link to="/profile" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Profile
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
              Upload Photo
            </Button>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-border/50">
          <nav className="px-4 py-4 space-y-4">
            <Link to="/" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/matches" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Matches
            </Link>
            <Link to="/discover" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Discover
            </Link>
            <Link to="/crushes" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Crushes
            </Link>
            <Link to="/profile" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Profile
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground hover:text-primary">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
                Upload Photo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;