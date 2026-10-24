import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, X, Check, Camera, Users, Star } from "lucide-react";
import { BackgroundEffects } from "@/components/fumu/BackgroundEffects";
import { MatchCard } from "@/components/fumu/MatchCard";

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
  {
    id: "5",
    name: "Taylor Swift",
    age: 34,
    location: "Nashville, TN",
    image: "/celebrity3.png",
    type: "celebrity",
    similarity: 89.2,
    bio: "Country turned pop superstar, songwriter and actress",
    verified: true,
  },
  {
    id: "6",
    name: "Alex Rivera",
    age: 27,
    location: "Miami, FL",
    image: "/crush1.png",
    type: "crush",
    similarity: 87.2,
    bio: "Surfer and artist with a heart of gold",
    verified: false,
  },
];

export default function Matches() {
  const [matches, setMatches] = useState<Match[]>(mockMatches);
  const [filter, setFilter] = useState<"all" | "celebrity" | "doppelganger" | "crush">("all");

  const filteredMatches = matches.filter((match) => 
    filter === "all" || match.type === filter
  );

  const handleLike = (matchId: string) => {
    setMatches((prev) => prev.filter((m) => m.id !== matchId));
  };

  const handlePass = (matchId: string) => {
    setMatches((prev) => prev.filter((m) => m.id !== matchId));
  };

  return (
    <div className="min-h-screen bg-gradient-fumu relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Your Matches</h1>
            <p className="text-muted-foreground text-lg">Find your celebrity lookalikes and doppelgängers</p>
          </div>

          <div className="flex justify-center gap-4 mb-8 animate-slide-up">
            {[
              { key: "all", label: "All", icon: Users },
              { key: "celebrity", label: "Celebrities", icon: Star },
              { key: "doppelganger", label: "Doppelgängers", icon: Camera },
              { key: "crush", label: "Crushes", icon: Heart },
            ].map((filterOption) => (
              <Button
                key={filterOption.key}
                variant={filter === filterOption.key ? "default" : "outline"}
                className={cn(
                  "flex items-center gap-2",
                  filter === filterOption.key && "bg-primary text-primary-foreground neon-glow"
                )}
                onClick={() => setFilter(filterOption.key as any)}
              >
                <filterOption.icon className="h-4 w-4" />
                {filterOption.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMatches.map((match, index) => (
              <MatchCard
                key={match.id}
                {...match}
                onLike={() => handleLike(match.id)}
                onPass={() => handlePass(match.id)}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>

          {filteredMatches.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">No matches found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or scan a new photo</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}