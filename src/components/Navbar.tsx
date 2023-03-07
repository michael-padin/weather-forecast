import React from "react";

import { LogoutButton } from "./";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[1rem] py-[1rem] bg-slate-200">
      <div className="flex gap-2 items-center">
        <div className="lg:w-[70px] sm:w-[50px]">
          <img src={logo} alt="Weather Logo" className="h-full w-full" />
        </div>
        <h1 className="text-3xl sm:text-2xl font-bold">Weather Forecast</h1>
      </div>
      <div className="flex items-center">
        {/* <LogoutButton /> */}
      </div>
    </div>
  );
};

export default Navbar;
