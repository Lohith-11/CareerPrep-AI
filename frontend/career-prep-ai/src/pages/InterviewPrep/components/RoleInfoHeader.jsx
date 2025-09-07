import React from "react";

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
}) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 relative border-b border-gray-200">
      <div className="container mx-auto px-10 md:px-0">
        <div className="h-[220px] flex flex-col justify-center relative z-10">
          <div className="flex items-start">
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900">
                    {role}
                  </h2>
                  <p className="text-base text-slate-600 mt-2 max-w-lg">
                    {topicsToFocus}
                  </p>
                  {description && (
                    <p className="text-sm text-slate-500 mt-2 max-w-2xl">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6 flex-wrap">
            <div className="text-xs font-medium text-slate-700 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              Experience: {experience} {experience > 1 ? "Years" : "Year"}
            </div>

            <div className="text-xs font-medium text-slate-700 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              {questions} Q&A
            </div>

            <div className="text-xs font-medium text-slate-700 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              Updated: {lastUpdated}
            </div>
          </div>
        </div>

        <div className="w-[40vw] md:w-[30vw] h-[220px] flex items-center justify-center overflow-hidden absolute top-0 right-0">
          <div className="w-20 h-20 bg-blue-300/30 blur-[65px] animate-blob1" />
          <div className="w-20 h-20 bg-emerald-300/30 blur-[65px] animate-blob2" />
          <div className="w-16 h-16 bg-blue-200/40 blur-[45px] animate-blob3" />
          <div className="w-16 h-16 bg-emerald-200/40 blur-[45px] animate-blob1" />
        </div>
      </div>
    </div>
  );
};

export default RoleInfoHeader;
