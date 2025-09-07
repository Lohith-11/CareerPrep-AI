import React from "react";
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";
import { RiRobot3Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 backdrop-blur-sm py-2.5 px-4 md:px-4 sticky top-0 z-30 shadow-sm">
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link to="/dashboard">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-5 flex items-center justify-center hover:text-blue-600 transition-colors">
            <RiRobot3Fill size={29} className="text-blue-600 mr-2" />
            CareerPrep AI
          </h2>
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  );
};

export default Navbar;
