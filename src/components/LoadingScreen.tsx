import React from "react";
import { motion } from "framer-motion";
import NSULogo from "../assets/images/logo.jpg";

// Hashtag for social media and movement
const HASHTAG = "#परिवर्तनसम्भवछ";

// Campus location
const LOCATION = "Ratna Rajyalaxmi Campus Pradarsani Marga, Kathmandu";

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-emerald-950 to-rose-950 text-white relative overflow-hidden">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none" />

      {/* Rotating Border Container */}
      <motion.div
        className="relative w-64 h-64 border-8 border-dashed border-transparent border-t-emerald-500 border-b-rose-500 rounded-full"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{
          opacity: 1,
          rotate: 360,
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {/* Static Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.img
            src={NSULogo}
            alt="Nepal Students' Union Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 120,
              },
            }}
            className="w-56 h-56 object-cover rounded-full shadow-2xl border-4 border-white/20"
          />
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.5,
            duration: 0.5,
          },
        }}
        className="text-center mt-8"
      >
        <motion.p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-rose-300">
          Nepal Students' Union
        </motion.p>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.5,
            },
          }}
          className="mt-4 text-sm text-white/80"
        >
          <p>{HASHTAG}</p>
          <p className="mt-2">{LOCATION}</p>
        </motion.div>
      </motion.div>

      {/* Optional Background Elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-16 h-16 bg-emerald-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="absolute top-10 right-10 w-24 h-24 bg-rose-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
          transition: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
};

export default LoadingScreen;
