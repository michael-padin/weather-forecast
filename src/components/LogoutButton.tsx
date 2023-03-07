import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="border-[2px] border-[#118be4] sm:px-[1rem] md:lg:px-[2rem] sm:py-[.5rem] md:py-[.8rem] text-[18px] bg-blue-50 text-[#118be4] rounded-md font-bold"
      onClick={() => logout()}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
