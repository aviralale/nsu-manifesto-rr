import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NSULogo from "../assets/images/logo.jpeg";
import CongressLogo from "../assets/images/COngressLogo.jpg";
import PresidentCV from "../assets/pdfs/president-details.pdf"; // Add your PDF path

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Vision", path: "/vision" },
    { label: "Team", path: "/team" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-emerald-500 to-rose-500
             text-white p-2 rounded-full
             hover:from-emerald-600 hover:to-rose-600
             transition-all shadow-md flex gap-2"
          >
            <motion.img
              src={CongressLogo}
              alt="Nepal Students' Union"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="h-12 w-auto rounded-full shadow-md"
            />
            <motion.img
              src={NSULogo}
              alt="Nepal Students' Union"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="h-12 w-auto rounded-full shadow-md"
            />
          </motion.button>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.path}
                className="text-emerald-800 hover:text-rose-600
                 font-medium transition-colors relative
                 after:content-[''] after:absolute after:bottom-[-4px]
                 after:left-0 after:w-0 after:h-0.5
                 after:bg-rose-600 after:transition-all
                 hover:after:w-full"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* CV Download Button for Desktop */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={PresidentCV}
              download
              className="text-emerald-800 hover:text-rose-600
               font-medium transition-colors flex items-center gap-2
               relative after:content-[''] after:absolute after:bottom-[-4px]
               after:left-0 after:w-0 after:h-0.5
               after:bg-rose-600 after:transition-all
               hover:after:w-full"
            >
              <FileText size={16} />
              President Details
            </a>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile CV Download Button */}
          <a
            href={PresidentCV}
            download
            className="text-emerald-800 hover:text-rose-600"
          >
            <FileText size={20} />
          </a>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-emerald-800 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg"
          >
            <nav className="flex flex-col items-center py-6 space-y-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-emerald-800 hover:text-rose-600
                   font-medium transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* CV Download in Mobile Menu */}
              <a
                href={PresidentCV}
                download
                className="text-emerald-800 hover:text-rose-600
                 font-medium transition-colors text-lg flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText size={20} />
                President Details
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
