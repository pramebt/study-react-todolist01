import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const HamburgerMenu = ({ activeLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition-colors duration-200"
        aria-label="Toggle menu"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isMenuOpen ? (
            <FaTimes className="w-5 h-5 text-amber-700" />
          ) : (
            <FaBars className="w-5 h-5 text-amber-700" />
          )}
        </motion.div>
      </motion.button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 shadow-lg border-t border-amber-200"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container mx-auto px-8 py-4">
              <motion.ul className="flex flex-col gap-2">
                <motion.li variants={menuItemVariants}>
                  <NavLink 
                    to="/" 
                    className={activeLink}
                    onClick={closeMenu}
                  >
                    Home
                  </NavLink>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                  <NavLink 
                    to="/about" 
                    className={activeLink}
                    onClick={closeMenu}
                  >
                    About
                  </NavLink>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu; 