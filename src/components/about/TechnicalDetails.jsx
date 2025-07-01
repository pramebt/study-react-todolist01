import React from "react";

const TechnicalDetails = () => {
  const techItems = [
    "Built with React 18 and modern JavaScript (ES6+)",
    "Styled with Tailwind CSS for responsive design",
    "Uses localStorage for data persistence",
    "React Router for navigation",
    "React Icons for beautiful iconography"
  ];

  return (
    <div className="bg-white rounded-xl border border-amber-200 p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-amber-800 mb-4">
        Technical Details
      </h3>
      <div className="space-y-3 text-gray-700">
        {techItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalDetails; 