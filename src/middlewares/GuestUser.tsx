import React from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const GuestUser = ({ children }: { children: React.ReactNode }) => {
  const user = cookies.get("user");

  if (user && user.email) {
    return (window.location.href = "/");
  }

  return children;
};

export default GuestUser;
