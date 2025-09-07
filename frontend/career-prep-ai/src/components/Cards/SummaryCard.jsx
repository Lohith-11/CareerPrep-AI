import React from "react";
import { LuTrash2 } from "react-icons/lu";
import { getInitials } from "../../utils/helper";

const SummaryCard = ({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl p-2 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 relative group hover:border-blue-300"
      onClick={onSelect}
    >
      <div
        className="rounded-xl p-6 cursor-pointer relative"
        style={{ background: colors.bgcolor }}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
            <span className="text-lg font-semibold text-slate-900">
              {getInitials(role)}
            </span>
          </div>

          {/* Content Container */}
          <div className="flex-grow">
            <div className="flex justify-between items-center">
              {/* Title and Skills */}
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{role}</h2>
                <p className="text-sm text-slate-600 mt-1">{topicsToFocus}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="hidden group-hover:flex items-center gap-2 text-xs text-red-500 font-medium bg-red-50 px-3 py-1.5 rounded-lg text-nowrap border border-red-100 hover:border-red-200 hover:bg-red-100 cursor-pointer absolute top-4 right-4 transition-all duration-200"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <LuTrash2 />
        </button>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <div className="text-xs font-medium text-slate-700 px-3 py-1.5 border border-slate-300 rounded-full bg-slate-50">
            Experience: {experience} {experience > 1 ? "Years" : "Year"}
          </div>

          <div className="text-xs font-medium text-slate-700 px-3 py-1.5 border border-slate-300 rounded-full bg-slate-50">
            {questions} Q&A
          </div>

          <div className="text-xs font-medium text-slate-700 px-3 py-1.5 border border-slate-300 rounded-full bg-slate-50">
            Updated: {lastUpdated}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 font-normal line-clamp-2 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
