"use client";

import React from "react";

const ThankYouModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-xs sm:max-w-md lg:max-w-lg w-full text-center transform transition-all"
      >
        <div className="flex flex-col items-center">
          {/* Static Checkmark Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Thank You!
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Your message has been sent successfully.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
