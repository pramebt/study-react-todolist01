import React from "react";
import AboutHeader from "../components/about/AboutHeader";
import AboutContent from "../components/about/AboutContent";
import FeaturesGrid from "../components/about/FeaturesGrid";
import TechnicalDetails from "../components/about/TechnicalDetails";
import FuturePlans from "../components/about/FuturePlans";
import { motion } from "framer-motion";

const AboutPage = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <AboutHeader />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <AboutContent />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <FeaturesGrid />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <TechnicalDetails />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <FuturePlans />
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
