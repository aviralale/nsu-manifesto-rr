import React from "react";
import { Facebook, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/binod.joshi.79",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-emerald-950 to-rose-950 text-white py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.4, 0.6, 0.4],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -180, -360],
            opacity: [0.3, 0.5, 0.3],
            transition: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-between gap-12 text-center md:text-left"
        >
          {/* Organization Info */}
          <motion.div variants={itemVariants} className="w-1/2">
            <h3 className="text-3xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-rose-300">
              Nepal Students' Union
            </h3>
            <p className="text-rose-100 text-base leading-relaxed opacity-80">
              #परिवर्तनसम्भवछ
            </p>
          </motion.div>

          {/* Social Media & Contact */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold mb-2 text-emerald-300">
              Connect With Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-white transition-all group"
                >
                  <social.icon
                    size={28}
                    className="group-hover:text-emerald-400 transition-colors"
                  />
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-4 space-x-6">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Phone className="text-emerald-500" />
              </motion.div>
              <motion.a
                href="tel:+977-9868371847"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-emerald-300 transition-all"
              >
                +977-9868371847
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.5 },
          }}
          className="mt-12 pt-8 border-t border-emerald-800/30 text-center"
        >
          <p className="text-sm text-rose-200 opacity-70">
            &copy; {new Date().getFullYear()} Nepal Students' Union. All rights
            reserved. #परिवर्तनसम्भवछ
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
