import React from "react";
import { Facebook, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/binod.joshi.79",
    },
    // {
    //   icon: Twitter,
    //   href: "https://twitter.com/nvs_official",
    // },
    // {
    //   icon: Instagram,
    //   href: "https://instagram.com/nepal_vidhyarthi_sangh",
    // },
    // {
    //   icon: Linkedin,
    //   href: "https://linkedin.com/company/nepal-vidhyarthi-sangh",
    // },
  ];

  return (
    <footer className="bg-gradient-to-br from-emerald-950 to-rose-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between gap-12 text-center md:text-left">
          {/* Organization Info */}
          <div className="w-1/2">
            <h3 className="text-3xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-rose-300">
              Nepal Students' Union
            </h3>
            <p className="text-rose-100 text-base leading-relaxed opacity-80">
              Empowering youth through education, research, and community
              engagement. Transforming potential into leadership and innovation.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-2xl font-bold mb-6 text-emerald-300">
              Contact Us
            </h4>
          </div> */}

          {/* Social Media */}
          <div className="flex flex-col gap-2">
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
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={` hover:text-white transition-all`}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </div>
            <div className="flex gap-4 space-x-6">
              <Phone />

              <motion.a
                href="tel:"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={` hover:text-white transition-all`}
              >
                +977-9876543210
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-emerald-800/30 text-center">
          <p className="text-sm text-rose-200 opacity-70">
            &copy; {new Date().getFullYear()} Nepal Students' Union. All rights
            reserved. Empowering Students, Transforming Futures.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
