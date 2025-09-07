import React, { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuPin, LuPinOff, LuSparkles } from "react-icons/lu";
import AIResponsePreview from "../../pages/InterviewPrep/components/AIResponsePreview";

const QuestionCard = ({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight + 10);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="bg-white rounded-2xl mb-6 overflow-hidden py-6 px-6 shadow-sm hover:shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 group">
        <div className="flex items-start justify-between cursor-pointer">
          <div className="flex items-start gap-4">
            <span className="text-sm font-semibold text-blue-600 leading-5 flex-shrink-0 bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center">
              Q
            </span>

            <h3
              className="text-sm font-medium text-slate-900 mr-0 md:mr-20 leading-relaxed hover:text-blue-600 transition-colors"
              onClick={toggleExpand}
            >
              {question}
            </h3>
          </div>

          <div className="flex items-center justify-end ml-4 relative">
            <div
              className={`flex gap-2 ${
                isExpanded ? "md:flex" : "md:hidden group-hover:flex"
              }`}
            >
              <button
                className="flex items-center gap-2 text-xs text-slate-700 font-medium bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 cursor-pointer transition-all duration-200"
                onClick={onTogglePin}
              >
                {isPinned ? (
                  <LuPinOff className="text-xs" />
                ) : (
                  <LuPin className="text-xs" />
                )}
              </button>

              <button
                className="flex items-center gap-2 text-xs text-emerald-700 font-medium bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 hover:border-emerald-300 cursor-pointer transition-all duration-200"
                onClick={() => {
                  setIsExpanded(true);
                  onLearnMore();
                }}
              >
                <LuSparkles />
                <span className="hidden md:block">Learn More</span>
              </button>
            </div>

            <button
              className="text-slate-400 hover:text-slate-600 cursor-pointer ml-2 p-1 rounded-lg hover:bg-gray-100 transition-all duration-200"
              onClick={toggleExpand}
            >
              <LuChevronDown
                size={20}
                className={`transform transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: `${height}px` }}
        >
          <div
            ref={contentRef}
            className="mt-5 text-slate-700 bg-gray-50 px-6 py-4 rounded-xl border border-gray-100"
          >
            <AIResponsePreview content={answer} />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
