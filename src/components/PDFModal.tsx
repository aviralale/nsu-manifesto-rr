import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Expand, Minimize } from "lucide-react";
import ManifestoPDF from "../assets/pdfs/election-manifesto.pdf";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PDFModal: React.FC<PDFModalProps> = ({ isOpen, onClose }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`
            bg-white rounded-2xl shadow-2xl overflow-hidden 
            ${
              isFullScreen
                ? "w-full h-full"
                : "w-full sm:w-5/6 sm:max-w-4xl h-[90vh] sm:h-5/6"
            }
            transition-all duration-300 relative flex flex-col
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-100 border-b">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800 truncate">
              Election Manifesto
            </h2>

            {/* Control Buttons */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="hover:bg-gray-200 p-1 sm:p-2 rounded-full"
              >
                {isFullScreen ? (
                  <Minimize size={16} className="text-gray-800" />
                ) : (
                  <Expand size={16} className="text-gray-800" />
                )}
              </button>

              <a
                href={ManifestoPDF}
                download
                className="hover:bg-gray-200 p-1 sm:p-2 rounded-full"
              >
                <Download size={16} className="text-gray-800" />
              </a>

              <button
                onClick={onClose}
                className="hover:bg-red-100 p-1 sm:p-2 rounded-full text-gray-600 hover:text-red-600"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-grow overflow-auto">
            <iframe
              src={ManifestoPDF}
              className="w-full h-full"
              title="Election Manifesto"
            ></iframe>
            <p className="text-center p-4 text-sm sm:text-base">
              Your browser doesn't support PDF viewing.
              <a
                href={ManifestoPDF}
                download
                className="text-blue-600 underline ml-2"
              >
                Download the manifesto
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
