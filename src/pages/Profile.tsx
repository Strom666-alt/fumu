import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, LogOut, Star, Heart, Camera, Users, Edit2 } from "lucide-react";
import { BackgroundEffects } from "@/components/fumu/BackgroundEffects";
import { cn } from "@/lib/utils";

interface Stat {
  label: string;
  value: string | number;
  icon: React.ElementType;
}

const stats: Stat[] = [
  { label: "Matches Found", value: 12, icon: Star },
  { label: "Doppelgängers", value: 8, icon: Camera },
  { label: "Crushes", value: 4, icon: Heart },
  { label: "Connections", value: 3, icon: Users },
];

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Alex Rivera");
  const [bio, setBio] = useState("Surfer and artist with a heart of gold");
  const [age, setAge] = useState("27");
  const [location, setLocation] = useState("Miami, FL");

  return (
    <div className="min-h-screen bg-gradient-fumu relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2 gradient-text">My Profile</h1>
            <p className="text-muted-foreground">Manage your account and view your matches</p>
          </div>

          <Card className="glass-card mb-8 animate-slide-up">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <Avatar className="h-32 w-32 ring-4 ring-primary/30">
                    <AvatarImage src="/placeholder-avatar.png" alt={name} />
                    <AvatarFallback className="text-4xl font-bold">{name.split(" ")[0][0]}</AvatarFallback>
                  </Avatar>
                  {editing && (
                    <div className="absolute bottom-0 right-0 bg-primary p-2 rounded-full shadow-lg">
                      <Button variant="ghost" size="icon" className="text-white" onClick={() => setEditing(false)}>
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
                
                {editing ? (
                  <div className="space-y-4 w-full max-w-md">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-background border border-border/50 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Age</label>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full bg-background border border-border/50 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Location</label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-background border border-border/50 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Bio</label>
                      <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows={3}
                        className="w-full bg-background border border-border/50 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={() => setEditing(false)}>Cancel</Button>
                      <Button className="bg-gradient-to-r from-primary to-accent text-white">Save Changes</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-muted-foreground">{age} • {location}</p>
                    <p className="text-sm text-muted-foreground max-w-md">{bio}</p>
                  </div>
                )}
                
                <div className="mt-6 flex gap-2">
                  <Button variant="outline" onClick={() => setEditing(!editing)}>
                    {editing ? "Cancel" : <Edit2 className="h-4 w-4 mr-2" />} Edit Profile
                  </Button>
                  <Button variant="ghost" className="text-muted-foreground hover:text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 mb-8 animate-slide-up">
            {stats.map((stat) => (
              <Card key={stat.label} className="glass-card p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Settings</h3>
                  <p className="text-sm text-muted-foreground">Manage your account preferences</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Star className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Upload New Photo</h3>
                  <p className="text-sm text-muted-foreground">Update your profile picture</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Star className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Connected Accounts</h3>
                  <p className="text-sm text-muted-foreground">Link your social media</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Star className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}