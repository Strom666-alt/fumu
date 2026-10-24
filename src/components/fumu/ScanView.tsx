import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScanViewProps {
  onScanComplete: (matches: any[]) => void;
  onCancel: () => void;
}

export const ScanView = ({ onScanComplete, onCancel }: ScanViewProps) => {
  const [step, setStep] = useState<"upload" | "scanning" | "complete">("upload");
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
        setStep("scanning");
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (step === "scanning") {
      const timer = setTimeout(() => {
        setStep("complete");
        onScanComplete([]);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step, onScanComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl font-bold mb-4 gradient-text">Scan Your Face</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          {step === "upload" && "Upload a selfie to find your perfect matches"}
          {step === "scanning" && "Our AI is analyzing your photo to find your perfect matches..."}
          {step === "complete" && "Scan complete!"}
        </p>
      </div>

      {step === "upload" && (
        <>
          <Card
            className="glass-card border-2 border-dashed border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer w-64 h-64 mb-8 flex flex-col items-center justify-center"
            onClick={() => fileInputRef.current?.click()}
          >
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Upload className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground">Click to upload or drag & drop</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
            </CardContent>
          </Card>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            capture="user"
            className="hidden"
            onChange={handleUpload}
          />
        </>
      )}

      {step === "scanning" && (
        <div className="relative w-48 h-48 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 flex items-center justify-center">
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Camera className="h-12 w-12 text-primary animate-pulse" />
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary neon-glow animate-float" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-accent neon-glow-magenta animate-float" style={{ animationDelay: "1s" }} />
        </div>
      )}

      {step === "complete" && (
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center neon-glow">
            <Camera className="h-8 w-8 text-primary" />
          </div>
          <p className="text-muted-foreground">Redirecting to results...</p>
        </div>
      )}

      <Button variant="ghost" onClick={onCancel} className="mt-4">
        <X className="h-4 w-4 mr-2" />
        Cancel
      </Button>
    </div>
  );
};

export default ScanView;