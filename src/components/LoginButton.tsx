import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="px-[2rem] py-[.5rem] lg:px-[4rem] lg:py-[.8rem] text-[18px] bg-[#118be4] text-white rounded-md font-bold"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
};

export default LoginButton;
