import React from "react";
import { LoginButton } from "../components";

const Auth = () => {
  return (
    <div className="w-[100%] flex flex-col">
      <div className="text-left flex max-w-[700px] mt-[150px] mx-auto flex-col gap-[2rem] text">
        <p className="text-xl">
          Welcome to the weather forecast web application. Please Login with
          your Github user to use the application and view the weather in you
          city.
        </p>
        <div className="flex">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Auth;
