import React from "react";

import { Link, NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const Navbar = () => {
  const activeLink = ({ isActive }) =>
    isActive
      ? "border-b-2 border-yellow-400 text-yellow-700 font-semibold px-2 pb-1 bg-yellow-50"
      : "text-yellow-700 hover:text-yellow-800 px-2 pb-1 transition-colors duration-150 bg-yellow-50";

  return (
    <header className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 shadow-lg">
      <div className="container mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 font-bold text-2xl text-amber-800">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                <FaReact className="w-5 h-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                Todo List
              </span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-amber-300 to-transparent"></div>
          </div>
          
          <ul className="hidden md:flex gap-x-6">
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeLink}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
