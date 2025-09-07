import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ label, placeholder, type, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <label className="text-sm font-medium text-slate-700 mb-2 block">
        {label}
      </label>
      <div className="input-box">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-slate-900 placeholder-slate-400"
          value={value}
          onChange={(e) => onChange(e)}
        />
        {type == "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={20}
                className="text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={20}
                className="text-slate-400 cursor-pointer hover:text-slate-600 transition-colors"
                onClick={() => toggleShowPassword()}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
