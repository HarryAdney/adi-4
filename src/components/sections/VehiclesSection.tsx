import React from "react";
import VehicleCard from "../cards/VehicleCard";
import { Button } from "../ui/button";
import { Car } from "lucide-react";

interface Vehicle {
  imageUrl: string;
  model: string;
  year: string;
  transmission: string;
  features: Array<{
    name: string;
    description: string;
  }>;
}

interface VehiclesSectionProps {
  title?: string;
  description?: string;
  vehicles?: Vehicle[];
}

const defaultVehicles: Vehicle[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=500&h=300&fit=crop",
    model: "Toyota Corolla",
    year: "2023",
    transmission: "Automatic",
    features: [
      {
        name: "Dual Controls",
        description: "Instructor-controlled brake and acceleration",
      },
      {
        name: "Safety Features",
        description: "Advanced driver assistance systems",
      },
      {
        name: "Backup Camera",
        description: "For easy parking practice",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=500&h=300&fit=crop",
    model: "Honda Civic",
    year: "2023",
    transmission: "Automatic",
    features: [
      {
        name: "Smart Braking",
        description: "Emergency brake assist system",
      },
      {
        name: "Lane Assist",
        description: "Lane departure warning system",
      },
      {
        name: "360° Camera",
        description: "Complete surrounding view",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=500&h=300&fit=crop",
    model: "Hyundai Elantra",
    year: "2023",
    transmission: "Automatic",
    features: [
      {
        name: "Blind Spot",
        description: "Blind spot detection system",
      },
      {
        name: "Parking Assist",
        description: "Automated parking guidance",
      },
      {
        name: "ECO Mode",
        description: "Fuel-efficient driving mode",
      },
    ],
  },
];

const VehiclesSection = ({
  title = "Our Training Vehicles",
  description = "Learn to drive in our modern, well-maintained fleet of vehicles equipped with the latest safety features.",
  vehicles = defaultVehicles,
}: VehiclesSectionProps) => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Car className="w-8 h-8 text-red-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="bg-red-600 text-white hover:bg-red-700"
          >
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
