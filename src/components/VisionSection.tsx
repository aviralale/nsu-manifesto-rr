import React from "react";
import { motion } from "framer-motion";
import { Award, Rocket, Globe, BookOpen } from "lucide-react";

const VisionSection: React.FC = () => {
  const visionItems = [
    {
      title: "Community Engagement",
      points: [
        "Skill-Up Friday Program",
        "Guest & Expert Lecture Sessions",
        "Community Outreach Initiatives",
        "Collaborative Workshops",
      ],
      icon: Globe,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Research Training",
      points: [
        "Comprehensive Research Methodology",
        "Paid Internship Opportunities",
        "Advanced Workshop Series",
        "Academic Publication Support",
      ],
      icon: BookOpen,
      color: "text-rose-500",
      bgColor: "bg-rose-50",
    },
    {
      title: "Leadership Development",
      points: [
        "Leadership Skill Workshops",
        "Mentorship Programs",
        "Personal Branding Seminars",
        "Professional Networking Events",
      ],
      icon: Award,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Innovation Incubation",
      points: [
        "Startup Pitch Competitions",
        "Innovation Grant Programs",
        "Technical Skill Development",
        "Entrepreneurship Bootcamps",
      ],
      icon: Rocket,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
  ];

  return (
    <section className="py-20 pt-36 bg-gradient-to-br from-rose-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black text-center mb-16 text-transparent 
                     bg-clip-text bg-gradient-to-r from-emerald-900 to-rose-900"
        >
          Our Vision & Mission
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.12)",
              }}
              className={`${item.bgColor} rounded-2xl p-6 shadow-lg transform 
                         transition-all duration-300 hover:shadow-xl  w-full
                         border-l-8 ${
                           index % 2 === 0
                             ? "border-emerald-500"
                             : "border-rose-500"
                         }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-full mr-4 
                              ${item.color} bg-white/20 shadow-md`}
                >
                  <item.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">
                  {item.title}
                </h3>
              </div>
              <ul className="space-y-3 text-rose-800">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-base font-medium"
                  >
                    <span
                      className={`w-2.5 h-2.5 ${
                        index % 2 === 0 ? "bg-emerald-500" : "bg-rose-500"
                      } rounded-full mr-3`}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
