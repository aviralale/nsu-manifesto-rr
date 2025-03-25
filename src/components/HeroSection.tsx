import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, FileText } from "lucide-react";
import { PDFModal } from "./PDFModal";
import { teamMembers } from "../data/TeamMembersData";

const HeroSection: React.FC = () => {
  const [isManifestoModalOpen, setIsManifestoModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative bg-gradient-to-br from-emerald-950 to-rose-950 
                   text-white min-h-screen flex items-center justify-center 
                   py-20 pt-36 overflow-hidden"
      >
        {/* Subtle Geometric Overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Diagonal Line Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.05) 15px, rgba(255,255,255,0.05) 30px)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Title Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 space-y-3"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black tracking-tighter 
                         text-transparent bg-clip-text bg-gradient-to-r 
                         from-emerald-300 to-rose-300 drop-shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Nepal Students' Union
            </motion.h1>
            <p className="text-2xl md:text-3xl font-semibold text-emerald-100 tracking-wide">
              Ratna Rajyalaxmi Campus
            </p>
            <p className="text-lg md:text-xl text-emerald-200 opacity-80">
              Pradarsani Marg, Kathmandu
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-6 pt-6">
              {[
                { icon: Users, text: "Our Team", variant: "emerald" },
                {
                  icon: FileText,
                  text: "Election Manifesto",
                  variant: "rose",
                  onClick: () => setIsManifestoModalOpen(true),
                },
              ].map((button, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={button.onClick}
                  className={`
                    px-8 py-4 rounded-xl shadow-xl transition 
                    bg-${button.variant}-600 hover:bg-${button.variant}-700 
                    text-white flex items-center space-x-3
                    transform hover:-translate-y-1 hover:shadow-2xl
                  `}
                >
                  <button.icon className="w-6 h-6" />
                  <span className="font-semibold">{button.text}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Team Members Grid */}
          <div className="space-y-12">
            {/* Top Tier: Leadership */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center"
            >
              {teamMembers
                .filter((member) =>
                  ["सचिव", "अध्यक्ष", "कोषाध्यक्ष"].includes(member.role)
                )
                .map((member, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`
                      bg-white/10 backdrop-blur-md border border-white/20  w-full
                      rounded-2xl p-6 text-center shadow-xl transition-all
                      ${member.role === "अध्यक्ष" ? "scale-110" : ""}
                    `}
                  >
                    <div className="mx-auto w-40 h-40 mb-4 relative group">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top rounded-full 
                                   border-4 border-emerald-500/50 grayscale-0 
                                   group-hover:grayscale transition-all duration-300"
                      />
                      <div
                        className="absolute inset-0 bg-emerald-900/30 rounded-full 
                                    opacity-0 group-hover:opacity-100 transition-opacity 
                                    flex items-center justify-center"
                      >
                        <span className="text-white text-sm text-center px-2">
                          {member.role}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm text-rose-200 uppercase tracking-widest">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
            </motion.div>

            {/* Sadasya Members */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-center mb-8 text-emerald-200">
                Pratyakshya Tarfa Sadasya Haru
              </h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center"
              >
                {teamMembers
                  .filter((member) => member.role === "सदस्य")
                  .map((member, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 backdrop-blur-md border border-white/10 
                                 rounded-xl p-4 text-center shadow-lg transition-all 
                                 hover:bg-white/10 w-full"
                    >
                      <div className="relative mx-auto w-28 h-28 mb-3">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top rounded-full 
                                     border-3 border-emerald-500/30 grayscale-0 
                                     hover:grayscale transition-all"
                        />
                      </div>
                      <h3 className="text-base font-semibold text-white truncate">
                        {member.name}
                      </h3>
                      <p className="text-xs text-rose-200 uppercase tracking-wider">
                        {member.role}
                      </p>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <PDFModal
        isOpen={isManifestoModalOpen}
        onClose={() => setIsManifestoModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
