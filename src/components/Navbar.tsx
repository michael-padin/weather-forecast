import React from "react";

import { LogoutButton } from "./";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[1rem] py-[1rem]">
      <div className="flex gap-2 items-center">
        <div>
          <img src={logo} alt="Weather Logo" />
        </div>
        <h1 className="text-3xl font-bold">Weather Forecast</h1>
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Navbar;
