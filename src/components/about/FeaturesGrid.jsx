import React from "react";
import { MdCheckCircle, MdStorage, MdSecurity, MdSpeed } from "react-icons/md";
import FeatureCard from "./FeatureCard";

const FeaturesGrid = () => {
  const features = [
    {
      icon: <MdCheckCircle className="w-8 h-8" />,
      title: "Task Management",
      description: "Easily add, edit, and delete tasks with a beautiful interface"
    },
    {
      icon: <MdStorage className="w-8 h-8" />,
      title: "Local Storage",
      description: "Your tasks are saved locally in your browser for privacy"
    },
    {
      icon: <MdSecurity className="w-8 h-8" />,
      title: "Privacy First",
      description: "No data is sent to external servers - everything stays on your device"
    },
    {
      icon: <MdSpeed className="w-8 h-8" />,
      title: "Fast & Responsive",
      description: "Built with React for smooth and fast user experience"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid; 