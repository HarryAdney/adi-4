import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Info } from "lucide-react";

interface VehicleFeature {
  name: string;
  description: string;
}

interface VehicleCardProps {
  imageUrl?: string;
  model?: string;
  year?: string;
  transmission?: string;
  features?: VehicleFeature[];
}

const VehicleCard = ({
  imageUrl = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=500&h=300&fit=crop",
  model = "Toyota Corolla",
  year = "2023",
  transmission = "Automatic",
  features = [
    {
      name: "Dual Controls",
      description: "Instructor-controlled brake and acceleration",
    },
    {
      name: "Safety Features",
      description: "Advanced driver assistance systems",
    },
    { name: "Backup Camera", description: "For easy parking practice" },
  ],
}: VehicleCardProps) => {
  return (
    <Card className="w-[400px] h-[300px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40">
        <img
          src={imageUrl}
          alt={model}
          className="w-full h-full object-cover"
        />
        <Badge
          className="absolute top-2 right-2 bg-white/90 text-black"
          variant="secondary"
        >
          {year}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{model}</CardTitle>
        <CardDescription>Transmission: {transmission}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="flex items-center gap-1">
                    {feature.name}
                    <Info className="h-3 w-3" />
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{feature.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
