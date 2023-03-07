import { LogoutButton } from "./";
import logo from "../assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { memo } from "react";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="flex justify-between px-[1rem] py-[1rem] bg-slate-200">
      <div className="flex gap-2 items-center">
        <div className="w-[70px]">
          <a href="/">
            <img src={logo} alt="Weather Logo" className="h-full w-full" />
          </a>
        </div>
        <div className={`${isAuthenticated && "sm:hidden md:lg:block"}`}>
          <h1 className="text-3xl sm:text-2xl font-bold">Weather Forecast</h1>
        </div>
      </div>
      {isAuthenticated ? (
        <div className="flex items-center">
          <LogoutButton />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default memo(Navbar);
