import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
const Input = ({ label, placeholder, type, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <label className="text-[13px] text-slate-700 font-medium">{label}</label>
      <div className="input-box">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none placeholder:text-slate-400"
          value={value}
          onChange={(e) => onChange(e)}
        />
        {type == "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-indigo-500 cursor-pointer hover:text-indigo-600"
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer hover:text-slate-500"
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
