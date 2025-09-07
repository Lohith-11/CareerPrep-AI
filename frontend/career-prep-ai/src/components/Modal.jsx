import React from "react";

const Modal = ({ children, isOpen, onClose, title, hideHeader }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/50 backdrop-blur-sm">
      {/* Model Content */}
      <div
        className={`relative flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden max-w-md w-full mx-4`}
      >
        {/* Model header */}
        {!hideHeader && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          </div>
        )}
        <button
          type="button"
          className="text-slate-400 bg-transparent hover:bg-gray-100 hover:text-slate-600 rounded-lg text-sm w-8 h-8 flex justify-center items-center absolute top-4 right-4 cursor-pointer transition-colors duration-200"
          onClick={onClose}
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        {/* Model Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
