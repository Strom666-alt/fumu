import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface MatchCardProps {
  name: string;
  age: number;
  location: string;
  image: string;
  type: "celebrity" | "doppelganger" | "crush";
  similarity: number;
  bio: string;
  verified?: boolean;
  onLike?: () => void;
  onPass?: () => void;
  className?: string;
}

export const MatchCard = ({
  name,
  age,
  location,
  image,
  type,
  similarity,
  bio,
  verified = false,
  onLike,
  onPass,
  className,
}: MatchCardProps) => {
  return (
    <Card className={cn("glass-card overflow-hidden animate-scale-in", className)}>
      <div className="relative">
        <Avatar className="w-full h-48 rounded-b-none">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="text-2xl">
            {name.split(" ")[0][0]}
            {name.split(" ")[1]?.[0] || ""}
          </AvatarFallback>
        </Avatar>
        <Badge
          className="absolute top-3 right-3"
          variant={type === "celebrity" ? "default" : "secondary"}
        >
          {type === "celebrity" ? "Celebrity" : type === "doppelganger" ? "Doppelganger" : "Crush"}
          {verified && type !== "celebrity" && " ✓"}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground">{age} • {location}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{similarity}%</div>
            <div className="text-xs text-muted-foreground">
              {type === "celebrity" ? "match" : type === "doppelganger" ? "similarity" : "compatibility"}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{bio}</p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-border/50 hover:bg-destructive/10 hover:text-destructive"
            onClick={onPass}
          >
            <X className="h-4 w-4 mr-1" />
            Pass
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-primary to-accent text-white"
            onClick={onLike}
          >
            <Check className="h-4 w-4 mr-1" />
            Like
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MatchCard;