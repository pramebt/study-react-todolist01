import React from "react";

const AboutContent = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-8 mb-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-amber-800 mb-4">
        Welcome to Your Personal Task Manager
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        This application is a simple yet powerful Todo List designed to help you manage your daily tasks efficiently. 
        Built with React and modern web technologies, it provides a clean and intuitive interface for organizing your life.
      </p>
      <p className="text-gray-700 leading-relaxed">
        All your todo data is stored locally in your browser using localStorage, ensuring your tasks remain private 
        and accessible even after closing and reopening the browser. No data is sent to external servers, 
        giving you complete control over your information.
      </p>
    </div>
  );
};

export default AboutContent; 