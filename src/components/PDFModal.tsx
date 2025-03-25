import React from "react";
import ManifestoPDF from "../assets/pdfs/election-manifesto.pdf";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PDFModal: React.FC<PDFModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl w-5/6 max-w-4xl h-5/6 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Election Manifesto
        </h2>
        <div className="h-full">
          <object
            data={ManifestoPDF}
            type="application/pdf"
            width="100%"
            height="100%"
            className="border rounded"
          >
            <p>
              Your browser doesn't support PDF viewing.
              <a
                href={ManifestoPDF}
                download
                className="text-blue-600 underline"
              >
                Download the manifesto
              </a>
            </p>
          </object>
        </div>
      </div>
    </div>
  );
};
