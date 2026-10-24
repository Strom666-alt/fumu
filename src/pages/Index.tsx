import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Sparkles, Heart, Users, Star, ArrowRight, Check, X } from "lucide-react";
import { Logo } from "@/components/fumu/Logo";
import { BackgroundEffects } from "@/components/fumu/BackgroundEffects";
import { Header } from "@/components/fumu/Header";
import { BottomNav } from "@/components/fumu/BottomNav";
import { MatchCard } from "@/components/fumu/MatchCard";
import { cn } from "@/lib/utils";

interface Match {
  id: string;
  name: string;
  age: number;
  location: string;
  image: string;
  type: "celebrity" | "doppelganger" | "crush";
  similarity: number;
  bio: string;
  verified: boolean;
}

const mockMatches: Match[] = [
  {
    id: "1",
    name: "Ariana Grande",
    age: 31,
    location: "Los Angeles, CA",
    image: "/celebrity1.png",
    type: "celebrity",
    similarity: 98.7,
    bio: "Pop icon with incredible vocal range and iconic style",
    verified: true,
  },
  {
    id: "2",
    name: "Emma Watson",
    age: 34,
    location: "London, UK",
    image: "/celebrity2.png",
    type: "celebrity",
    similarity: 92.3,
    bio: "Actress and activist known for her role as Hermione Granger",
    verified: true,
  },
  {
    id: "3",
    name: "Sarah Johnson",
    age: 26,
    location: "New York, NY",
    image: "/doppelganger1.png",
    type: "doppelganger",
    similarity: 95.8,
    bio: "Marketing manager who loves art and travel",
    verified: false,
  },
  {
    id: "4",
    name: "Michael Chen",
    age: 28,
    location: "San Francisco, CA",
    image: "/doppelganger2.png",
    type: "doppelganger",
    similarity: 91.4,
    bio: "Software engineer with a passion for photography",
    verified: false,
  },
];

const mockCrushes = [
  {
    id: "c1",
    name: "Alex Rivera",
    age: 27,
    location: "Miami, FL",
    image: "/crush1.png",
    similarity: 87.2,
    bio: "Surfer and artist with a heart of gold",
  },
  {
    id: "c2",
    name: "Maya Patel",
    age: 24,
    location: "Seattle, WA",
    image: "/crush2.png",
    similarity: 84.5,
    bio: "Musician and coffee enthusiast",
  },
];

export default function Index() {
  const [currentView, setCurrentView] = useState<"home" | "scan" | "results">("home");
  const [matches, setMatches] = useState<Match[]>([]);

  const handleScan = () => {
    setCurrentView("scan");
    setTimeout(() => {
      const shuffled = [...mockMatches].sort(() => 0.5 - Math.random());
      setMatches(shuffled.slice(0, 3));
      setCurrentView("results");
    }, 2000);
  };

  const handleLike = (match: Match) => {
    setMatches((prev) => prev.filter((m) => m.id !== match.id));
  };

  const handlePass = (match: Match) => {
    setMatches((prev) => prev.filter((m) => m.id !== match.id));
  };

  return (
    <div className="min-h-screen bg-gradient-fumu relative overflow-hidden">
      <BackgroundEffects />
      <Header />

      <div className="relative z-10 pt-16 pb-20">
        {/* Home View */}
        {currentView === "home" && (
          <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
            <div className="text-center mb-16 animate-fade-in">
              <Logo size="lg" />
              <p className="mt-6 text-lg text-muted-foreground max-w-md mx-auto">
                Discover your celebrity lookalikes, real-life doppelgängers, and crushes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-4xl">
              {[
                { icon: Camera, title: "Scan Your Face", desc: "Upload a selfie to find your matches" },
                { icon: Star, title: "Find Doppelgängers", desc: "Discover real people who look like you" },
                { icon: Heart, title: "Find Crushes", desc: "Find people you might be compatible with" },
              ].map((item, i) => (
                <Card key={i} className="glass-card hover:neon-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" onClick={handleScan} className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-4 text-lg neon-glow">
              Start Scanning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Scan View */}
        {currentView === "scan" && (
          <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Scan Your Face</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Our AI is analyzing your photo to find your perfect matches...
              </p>
            </div>

            <div className="relative w-48 h-48 mb-8 animate-pulse">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 flex items-center justify-center">
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-primary animate-pulse" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary neon-glow animate-float" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-accent neon-glow-magenta animate-float" style={{ animationDelay: "1s" }} />
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="border-border/50">
                Choose Different Photo
              </Button>
            </div>
          </div>
        )}

        {/* Results View */}
        {currentView === "results" && (
          <div className="min-h-screen flex flex-col items-center px-4 py-8">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold mb-2 gradient-text">Your Matches</h2>
              <p className="text-muted-foreground">Found {matches.length} potential matches</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              {matches.map((match, index) => (
                <MatchCard
                  key={match.id}
                  {...match}
                  onLike={() => handleLike(match)}
                  onPass={() => handlePass(match)}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                />
              ))}
            </div>

            <div className="mt-8">
              <Button variant="ghost" onClick={() => setCurrentView("home")}>
                Scan Another Photo
              </Button>
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
