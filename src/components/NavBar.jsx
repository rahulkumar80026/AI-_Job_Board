import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navLinks = ["Home", "Jobs", "About", "Contact"];

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">AI-Powered Job Board</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-gray-700">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:text-blue-600 transition"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
