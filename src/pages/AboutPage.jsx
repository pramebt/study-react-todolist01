import React from "react";
import AboutHeader from "../components/about/AboutHeader";
import AboutContent from "../components/about/AboutContent";
import FeaturesGrid from "../components/about/FeaturesGrid";
import TechnicalDetails from "../components/about/TechnicalDetails";
import FuturePlans from "../components/about/FuturePlans";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <AboutHeader />
      <AboutContent />
      <FeaturesGrid />
      <TechnicalDetails />
      <FuturePlans />
    </div>
  );
};

export default AboutPage;
