import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  imageUrl?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Learn to Drive with Confidence",
  subtitle = "Professional driving instruction with experienced instructors and modern vehicles. Start your journey to becoming a safe, confident driver today.",
  ctaText = "Book Your First Lesson",
  imageUrl = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&h=600&fit=crop",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <section className="bg-white w-full min-h-[600px] flex items-center py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            {subtitle}
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
        >
          <img
            src={imageUrl}
            alt="Driving lesson"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
