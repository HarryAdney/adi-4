import React from "react";
import InstructorCard from "../cards/InstructorCard";

interface InstructorsSectionProps {
  instructors?: Array<{
    name: string;
    image: string;
    experience: number;
    specialties: string[];
    rating: number;
    certifications: string[];
  }>;
}

const defaultInstructors = [
  {
    name: "John Smith",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=instructor1",
    experience: 10,
    specialties: ["Defensive Driving", "Highway Training", "Parallel Parking"],
    rating: 4.9,
    certifications: ["Licensed Instructor", "Advanced Safety Certified"],
  },
  {
    name: "Sarah Johnson",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=instructor2",
    experience: 8,
    specialties: ["New Drivers", "Winter Driving", "City Navigation"],
    rating: 4.8,
    certifications: ["Licensed Instructor", "Defensive Driving Expert"],
  },
  {
    name: "Michael Chen",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=instructor3",
    experience: 6,
    specialties: [
      "Manual Transmission",
      "Emergency Maneuvers",
      "Night Driving",
    ],
    rating: 4.7,
    certifications: ["Licensed Instructor", "Performance Driving Certified"],
  },
];

const InstructorsSection = ({
  instructors = defaultInstructors,
}: InstructorsSectionProps) => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Expert Instructors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from our team of professional, certified driving instructors
            with years of experience in driver education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {instructors.map((instructor, index) => (
            <InstructorCard
              key={index}
              name={instructor.name}
              image={instructor.image}
              experience={instructor.experience}
              specialties={instructor.specialties}
              rating={instructor.rating}
              certifications={instructor.certifications}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
