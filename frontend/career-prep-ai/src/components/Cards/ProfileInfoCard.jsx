import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };
  return (
    user && (
      <div className="flex items-center">
        <img
          src={user.profileImageUrl}
          alt=""
          className="w-10 h-10 bg-gray-200 rounded-full mr-3 object-cover border-2 border-gray-200"
        />
        <div>
          <div className="text-sm text-slate-900 font-semibold leading-4">
            {user.name || ""}
          </div>
          <button
            className="text-blue-600 text-sm font-medium cursor-pointer hover:text-blue-700 transition-colors"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;
