import React, { useContext } from "react";
import Navbar from "./Navbar";
import { UserContext } from "../../context/userContext";

const DashboardLayout = ({ children }) => {
  const { user } = useContext(UserContext);
  return (
    <div style={{ backgroundColor: "#FAF9F6", minHeight: "100vh" }}>
      <Navbar />
      {user && <div className="px-4">{children}</div>}
    </div>
  );
};

export default DashboardLayout;
