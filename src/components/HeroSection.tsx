import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Play, ArrowRight, Download } from "lucide-react";
import { teamMembers } from "../data/TeamMembersData";
import NSULogo from "../assets/images/logo.jpeg";
import Video from "../assets/videos/AQMgQnk_j5fhc1O1yXRMivFxRi58ctpoKpEaHUJAe_408aQJw-Y3B1Wuwwfe01v62f3Jr71zCzbMUosJNleoO5rL.mp4";
import Manifesto from "../assets/pdfs/election-manifesto.pdf"; // Add your manifesto PDF path
import { VideoModal } from "./VideoModal";

// Enhanced Action Button Type
type ActionButtonType = {
  icon: React.ElementType;
  text: string;
  title?: string;
  variant: string;
  onClick?: () => void;
  description?: string;
};

const HeroSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"overview" | "team">(
    "team"
  );
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Centralized Action Buttons Configuration
  const actionButtons: ActionButtonType[] = [
    {
      icon: Users,
      text: "Our Team",
      title: "हाम्रो उम्मेदवारहरू",
      variant: "emerald",
      description: "Meet our dedicated student leaders",
      onClick: () => setActiveSection("team"),
    },
    {
      icon: Download,
      text: "Download Manifesto",
      variant: "rose",
      description: "Our vision and commitment",
      onClick: () => window.open(Manifesto, "_blank"),
    },
    {
      icon: Play,
      text: "Watch Video",
      variant: "emerald",
      description: "Discover out journey",
      onClick: () => setIsVideoModalOpen(true),
    },
  ];

  // Existing getLeadershipMembers logic remains the same
  const getLeadershipMembers = () => {
    const priorityMember = teamMembers.find((member) => member.priority);
    const leadershipMembers = teamMembers.filter((member) =>
      ["सचिव", "अध्यक्ष", "कोषाध्यक्ष"].includes(member.role)
    );

    const filteredMembers = leadershipMembers.filter(
      (member) => member.name !== priorityMember?.name
    );

    return priorityMember
      ? [priorityMember, ...filteredMembers]
      : leadershipMembers;
  };

  return (
    <section
      className="relative bg-gradient-to-br from-emerald-950 to-rose-950 
                 text-white min-h-screen flex items-center justify-center 
                 py-20 pt-36 overflow-hidden"
    >
      {/* Background Patterns */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.05) 15px, rgba(255,255,255,0.05) 30px)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Responsive Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 space-y-4"
        >
          <div className="flex justify-center mb-6">
            <motion.img
              src={NSULogo}
              alt="NSU Logo"
              className="w-24 h-24 rounded-full border-4 border-emerald-500/50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

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
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {actionButtons.map((button, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={button.onClick}
              className={`
                relative px-8 py-4 rounded-xl shadow-xl transition 
                bg-${button.variant}-600 hover:bg-${button.variant}-700 
                text-white flex flex-col items-center space-y-2
                transform hover:-translate-y-1 hover:shadow-2xl
                group w-64
              `}
            >
              <button.icon className="w-8 h-8 mb-2" />
              <span className="font-semibold text-lg">{button.text}</span>
              <p className="text-xs opacity-70 text-center">
                {button.description}
              </p>
              <ArrowRight
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Dynamic Content Section */}
        <AnimatePresence mode="wait">
          {activeSection === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {/* Video Preview */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl 
                           border-4 border-emerald-500/30 group cursor-pointer"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <img
                  src={NSULogo}
                  alt="Nepal Students' Union Video"
                  className="w-full h-full object-cover transition-transform 
                             group-hover:scale-105 duration-300"
                />
                <div
                  className="absolute inset-0 bg-black/40 flex items-center 
                             justify-center opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300"
                >
                  <div
                    className="bg-emerald-600 text-white p-6 rounded-full 
                               animate-pulse hover:animate-none"
                  >
                    <Play size={48} className="stroke-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "team" && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <h1 className="text-5xl font-semibold kalimati text-center">
                {actionButtons[0].title}
              </h1>
              {/* Top Tier: Leadership */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center 
                       sm:grid-cols-2 lg:grid-cols-3"
              >
                {getLeadershipMembers().map((member, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`
                  bg-white/10 backdrop-blur-md border border-white/20 w-full
                  rounded-2xl p-6 text-center shadow-xl transition-all
                  ${
                    member.priority
                      ? "md:col-span-full lg:col-span-1 sm:order-first md:order-1"
                      : member.role === "कोषाध्यक्ष"
                      ? "sm:order-2 md:order-first"
                      : member.role === "सचिव"
                      ? "sm:order-3 md-order-3"
                      : ""
                  }
                  ${member.role === "अध्यक्ष" ? "scale-110" : ""}
                `}
                  >
                    <div className="mx-auto w-40 h-40 mb-4 relative group">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top rounded-full 
                           border-4 border-emerald-500/50 grayscale-0 
                           transition-all duration-300"
                      />
                    </div>
                    <h3
                      className="text-xl font-bold text-white tracking-tight"
                      style={{ fontFamily: "Kalimati, sans-serif" }}
                    >
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
                  प्रत्यक्ष तर्फ सदस्यहरू
                </h2>
                <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
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
                               transition-all"
                          />
                        </div>
                        <h3
                          className="text-base font-semibold text-white truncate"
                          style={{ fontFamily: "Kalimati, sans-serif" }}
                        >
                          {member.name}
                        </h3>
                        <p className="text-xs text-rose-200 uppercase tracking-wider">
                          {member.role}
                        </p>
                      </motion.div>
                    ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={Video}
      />
    </section>
  );
};

export default HeroSection;
