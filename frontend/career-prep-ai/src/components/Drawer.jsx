import React from "react";
import { LuX } from "react-icons/lu";
const Drawer = ({ isOpen, onClose, title, children }) => {
  return (
    <div
      className={`fixed top-[64px] right-0 z-40 h-[calc(100vh-64px)] p-6 overflow-y-auto transition-transform bg-white w-full md:w-[40vw] shadow-2xl border-l border-gray-200 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      tabIndex="-1"
      aria-labelledby="drawer-right-label"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <h5
          id="drawer-right-label"
          className="flex items-center text-lg font-semibold text-slate-900"
        >
          {title}
        </h5>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 bg-transparent hover:bg-gray-100 hover:text-slate-600 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center transition-colors duration-200"
        >
          <LuX className="text-lg" />
        </button>
      </div>

      {/* Body Content */}
      <div className="text-sm">{children}</div>
    </div>
  );
};
export default Drawer;
