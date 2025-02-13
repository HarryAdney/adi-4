import React from "react";
import Navbar from "./navigation/Navbar";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import InstructorsSection from "./sections/InstructorsSection";
import VehiclesSection from "./sections/VehiclesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <HeroSection />
        <ServicesSection />
        <InstructorsSection />
        <VehiclesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
