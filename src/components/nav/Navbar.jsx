import React from "react";
import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const activeLink = ({ isActive }) =>
    isActive
      ? "border-b-2 border-yellow-400 text-yellow-700 font-semibold px-2 pb-1 bg-yellow-50"
      : "text-yellow-700 hover:text-yellow-800 px-2 pb-1 transition-colors duration-150 bg-yellow-50";

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const navLinkVariants = {
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header 
      className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 shadow-lg relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-8 py-5">
        <motion.div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-3 font-bold text-2xl text-amber-800"
              variants={logoVariants}
              whileHover="hover"
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-md"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <FaReact className="w-5 h-5 text-white" />
              </motion.div>
              <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                Todo List
              </span>
            </motion.div>
            <motion.div 
              className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-amber-300 to-transparent"
              variants={itemVariants}
            />
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.ul 
            className="hidden md:flex gap-x-6"
            variants={itemVariants}
          >
            <motion.li variants={navLinkVariants} whileHover="hover">
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </motion.li>
            <motion.li variants={navLinkVariants} whileHover="hover">
              <NavLink to="/about" className={activeLink}>
                About
              </NavLink>
            </motion.li>
          </motion.ul>

          {/* Hamburger Menu */}
          <motion.div variants={itemVariants}>
            <HamburgerMenu activeLink={activeLink} />
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
