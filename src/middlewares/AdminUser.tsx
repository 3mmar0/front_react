import React from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const AdminUser = ({ children }: { children: React.ReactNode }) => {
  const user = cookies.get("user");

  if (!user) {
    return (window.location.href = "/login");
  }

  if (user && user?.role !== "admin") {
    return (window.location.href = "/");
  }

  return children;
};

export default AdminUser;
