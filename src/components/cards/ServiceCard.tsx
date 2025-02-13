import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { BookOpen, Car, Clock } from "lucide-react";

interface ServiceCardProps {
  icon?: React.ElementType;
  title?: string;
  description?: string;
  className?: string;
}

const ServiceCard = ({
  icon: Icon = BookOpen,
  title = "Comprehensive Training",
  description = "Learn everything you need to know about safe driving with our comprehensive curriculum.",
  className,
}: ServiceCardProps) => {
  return (
    <Card
      className={cn(
        "bg-white w-[350px] h-[400px] transition-all hover:shadow-lg",
        className,
      )}
    >
      <CardHeader className="text-center">
        <div className="mx-auto p-4 bg-red-100 rounded-full w-16 h-16 flex items-center justify-center">
          <Icon className="w-8 h-8 text-red-600" />
        </div>
        <CardTitle className="mt-4 text-xl font-bold text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export const defaultServices = [
  {
    icon: BookOpen,
    title: "Comprehensive Training",
    description:
      "Learn everything you need to know about safe driving with our comprehensive curriculum.",
  },
  {
    icon: Car,
    title: "Practical Lessons",
    description:
      "Get hands-on experience with our modern fleet of training vehicles.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Choose from a variety of time slots that work best with your schedule.",
  },
];

const ServiceCardComponent = ServiceCard;
export default ServiceCardComponent;
