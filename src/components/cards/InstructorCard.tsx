import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Car, Award, Star } from "lucide-react";

interface InstructorCardProps {
  name?: string;
  image?: string;
  experience?: number;
  specialties?: string[];
  rating?: number;
  certifications?: string[];
}

const InstructorCard = ({
  name = "John Smith",
  image = "https://api.dicebear.com/7.x/avataaars/svg?seed=instructor1",
  experience = 5,
  specialties = ["Defensive Driving", "Highway Training", "Parallel Parking"],
  rating = 4.8,
  certifications = ["Licensed Instructor", "Advanced Safety Certified"],
}: InstructorCardProps) => {
  return (
    <Card className="w-[300px] h-[400px] bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="text-center pb-2">
        <div className="flex justify-center mb-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <Car className="w-4 h-4" />
          <span>{experience} years experience</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Specialties</h4>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">{rating}</span>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">
                      {certifications.length} Certifications
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <ul className="text-sm">
                    {certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstructorCard;
