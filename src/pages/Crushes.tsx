import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, X, Check, Flame, MessageCircle, Star, MapPin } from "lucide-react";
import { BackgroundEffects } from "@/components/fumu/BackgroundEffects";

interface Crush {
  id: string;
  name: string;
  age: number;
  location: string;
  image: string;
  similarity: number;
  bio: string;
  interests: string[];
  compatibility: number;
  lastActive: string;
  isOnline: boolean;
}

const mockCrushes: Crush[] = [
  {
    id: "c1",
    name: "Alex Rivera",
    age: 27,
    location: "Miami, FL",
    image: "/crush1.png",
    similarity: 87.2,
    bio: "Surfer and artist with a heart of gold",
    interests: ["Surfing", "Art", "Beach", "Music"],
    compatibility: 92,
    lastActive: "2 hours ago",
    isOnline: true,
  },
  {
    id: "c2",
    name: "Maya Patel",
    age: 24,
    location: "Seattle, WA",
    image: "/crush2.png",
    similarity: 84.5,
    bio: "Musician and coffee enthusiast",
    interests: ["Music", "Coffee", "Piano", "Travel"],
    compatibility: 88,
    lastActive: "1 day ago",
    isOnline: false,
  },
  {
    id: "c3",
    name: "Jordan Lee",
    age: 26,
    location: "Portland, OR",
    image: "/crush3.png",
    similarity: 81.3,
    bio: "Graphic designer and outdoor lover",
    interests: ["Design", "Hiking", "Photography", "Nature"],
    compatibility: 76,
    lastActive: "3 hours ago",
    isOnline: true,
  },
  {
    id: "c4",
    name: "Sofia Martinez",
    age: 25,
    location: "Austin, TX",
    image: "/crush4.png",
    similarity: 79.8,
    bio: "Food blogger and adventure seeker",
    interests: ["Food", "Travel", "Writing", "Hiking"],
    compatibility: 83,
    lastActive: "5 hours ago",
    isOnline: true,
  },
  {
    id: "c5",
    name: "Ethan Brooks",
    age: 28,
    location: "Denver, CO",
    image: "/crush5.png",
    similarity: 77.4,
    bio: "Mountain guide and photographer",
    interests: ["Mountains", "Photography", "Hiking", "Skiing"],
    compatibility: 71,
    lastActive: "2 days ago",
    isOnline: false,
  },
  {
    id: "c6",
    name: "Olivia Chen",
    age: 23,
    location: "San Diego, CA",
    image: "/crush6.png",
    similarity: 75.9,
    bio: "Marine biologist and surfer",
    interests: ["Marine Biology", "Surfing", "Ocean", "Research"],
    compatibility: 69,
    lastActive: "30 minutes ago",
    isOnline: true,
  },
];

export default function Crushes() {
  const [crushes, setCrushes] = useState<Crush[]>(mockCrushes);
  const [selectedCrush, setSelectedCrush] = useState<Crush | null>(null);

  const handleLike = (crushId: string) => {
    setCrushes((prev) => prev.filter((c) => c.id !== crushId));
  };

  const handlePass = (crushId: string) => {
    setCrushes((prev) => prev.filter((c) => c.id !== crushId));
  };

  const handleSendMessage = (crush: Crush) => {
    setSelectedCrush(crush);
  };

  return (
    <div className="min-h-screen bg-gradient-fumu relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2 gradient-text">Discover Crushes</h1>
            <p className="text-muted-foreground text-lg">Find people you might be compatible with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crushes.map((crush, index) => (
              <Card key={crush.id} className="glass-card overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative">
                  <Avatar className="w-full h-48 rounded-b-none">
                    <AvatarImage src={crush.image} alt={crush.name} />
                    <AvatarFallback className="text-2xl">
                      {crush.name.split(" ")[0][0]}
                      {crush.name.split(" ")[1]?.[0] || ""}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className="absolute top-3 right-3" variant="secondary">
                    {crush.compatibility}% match
                  </Badge>
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Flame className="h-3 w-3 text-orange-400" />
                    <span className="text-xs text-white">Hot</span>
                  </div>
                  {crush.isOnline && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-green-500/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-xs text-green-400">Online</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">{crush.name}</h3>
                    <Badge variant="outline" className="text-xs">Crush</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{crush.bio}</p>
                  <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{crush.location}</span>
                    <span>•</span>
                    <span>Last active {crush.lastActive}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {crush.interests.slice(0, 3).map((interest) => (
                      <Badge key={interest} variant="outline" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                    {crush.interests.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{crush.interests.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-border/50 hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => handlePass(crush.id)}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Pass
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-accent text-white"
                      onClick={() => handleLike(crush.id)}
                    >
                      <Heart className="h-4 w-4 mr-1" />
                      Like
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full mt-2 text-muted-foreground hover:text-primary"
                    onClick={() => handleSendMessage(crush)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {crushes.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">No crushes found</h3>
              <p className="text-muted-foreground mb-4">Check back later or explore more profiles</p>
              <Button variant="outline" onClick={() => setCrushes(mockCrushes)}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}