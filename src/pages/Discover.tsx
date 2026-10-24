import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, X, Check, Search, Filter, MapPin, MessageSquare } from "lucide-react";
import { BackgroundEffects } from "@/components/fumu/BackgroundEffects";
import { MatchCard } from "@/components/fumu/MatchCard";

interface DiscoverUser {
  id: string;
  name: string;
  age: number;
  location: string;
  image: string;
  similarity: number;
  bio: string;
  interests: string[];
  distance: string;
}

const mockDiscoverUsers: DiscoverUser[] = [
  {
    id: "d1",
    name: "Sarah Johnson",
    age: 26,
    location: "New York, NY",
    image: "/doppelganger1.png",
    similarity: 95.8,
    bio: "Marketing manager who loves art and travel",
    interests: ["Photography", "Hiking", "Coffee", "Art Galleries"],
    distance: "2.3 mi",
  },
  {
    id: "d2",
    name: "Michael Chen",
    age: 28,
    location: "San Francisco, CA",
    image: "/doppelganger2.png",
    similarity: 91.4,
    bio: "Software engineer with a passion for photography",
    interests: ["Tech", "Photography", "Gaming", "Cooking"],
    distance: "15.2 mi",
  },
  {
    id: "d3",
    name: "Emma Davis",
    age: 24,
    location: "Los Angeles, CA",
    image: "/doppelganger3.png",
    similarity: 88.7,
    bio: "Graphic designer and yoga enthusiast",
    interests: ["Design", "Yoga", "Travel", "Music"],
    distance: "8.7 mi",
  },
  {
    id: "d4",
    name: "James Wilson",
    age: 30,
    location: "Chicago, IL",
    image: "/doppelganger4.png",
    similarity: 85.3,
    bio: "Architect who loves modern art and jazz",
    interests: ["Architecture", "Jazz", "Reading", "Cycling"],
    distance: "42.1 mi",
  },
  {
    id: "d5",
    name: "Lisa Park",
    age: 27,
    location: "Seattle, WA",
    image: "/doppelganger5.png",
    similarity: 82.9,
    bio: "Data scientist and outdoor adventurer",
    interests: ["Data Science", "Hiking", "Photography", "Coffee"],
    distance: "120.5 mi",
  },
  {
    id: "d6",
    name: "David Kim",
    age: 29,
    location: "Austin, TX",
    image: "/doppelganger6.png",
    similarity: 79.4,
    bio: "Musician and foodie exploring the city",
    interests: ["Music", "Food", "Travel", "Guitar"],
    distance: "200.3 mi",
  },
];

export default function Discover() {
  const [users, setUsers] = useState<DiscoverUser[]>(mockDiscoverUsers);
  const [showFilters, setShowFilters] = useState(false);

  const handleLike = (userId: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== userId));
  };

  const handlePass = (userId: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== userId));
  };

  return (
    <div className="min-h-screen bg-gradient-fumu relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-2 gradient-text">Discover People</h1>
              <p className="text-muted-foreground text-lg">Find real people who look like you</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <Card className="glass-card mb-8 animate-slide-up">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-medium mb-2">Age Range</label>
                    <div className="flex gap-2">
                      <input type="number" placeholder="Min" className="flex-1 bg-background border border-border/50 rounded-lg px-3 py-2 text-sm" />
                      <input type="number" placeholder="Max" className="flex-1 bg-background border border-border/50 rounded-lg px-3 py-2 text-sm" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-medium mb-2">Distance</label>
                    <select className="w-full bg-background border border-border/50 rounded-lg px-3 py-2 text-sm">
                      <option>Any distance</option>
                      <option>Within 10 miles</option>
                      <option>Within 50 miles</option>
                      <option>Within 100 miles</option>
                    </select>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-medium mb-2">Interests</label>
                    <input type="text" placeholder="Search interests..." className="w-full bg-background border border-border/50 rounded-lg px-3 py-2 text-sm" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, index) => (
              <Card key={user.id} className="glass-card overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative">
                  <Avatar className="w-full h-48 rounded-b-none">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback className="text-2xl">
                      {user.name.split(" ")[0][0]}
                      {user.name.split(" ")[1]?.[0] || ""}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className="absolute top-3 right-3" variant="secondary">
                    {user.similarity}% match
                  </Badge>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <MapPin className="h-3 w-3 text-primary" />
                    <span className="text-xs text-white">{user.distance}</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">{user.name}</h3>
                    <Badge variant="outline" className="text-xs">Doppelganger</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{user.bio}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {user.interests.slice(0, 3).map((interest) => (
                      <Badge key={interest} variant="outline" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                    {user.interests.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{user.interests.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-border/50 hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => handlePass(user.id)}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Pass
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-accent text-white"
                      onClick={() => handleLike(user.id)}
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Like
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {users.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">No one new to discover</h3>
              <p className="text-muted-foreground mb-4">Check back later or adjust your filters</p>
              <Button variant="outline" onClick={() => setUsers(mockDiscoverUsers)}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}