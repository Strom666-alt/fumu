import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  name: string;
  age: number;
  location: string;
  bio: string;
  matchesCount: number;
  className?: string;
}

export const ProfileCard = ({
  name,
  age,
  location,
  bio,
  matchesCount,
  className,
}: ProfileCardProps) => {
  return (
    <div className={cn("glass-card p-6", className)}>
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/placeholder-avatar.png" alt={name} />
          <AvatarFallback className="text-2xl font-bold">{name.split(" ")[0][0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{age}</p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-4">{bio}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Matches: {matchesCount}</span>
        </div>
        <Button variant="ghost" size="sm">
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;