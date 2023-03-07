import React from "react";

import { DisplayProfile, SearchCity } from "../components";

const Home = () => {
  const handleChange = () => {};

  const handleSearch = () => {

  }

  return (
    <div className="flex flex-col lg:w-auto justify-center flex-srap">
      <div className="sm:hidden md:lg:block w-[100%] flex text-[18px] justify-center">
        <DisplayProfile name="Michael Padin " nickname="michael-padin" />
      </div>
      <div className="mt-[100px] flex items-center justify-center ">
        <SearchCity handleChange={handleChange} handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Home;
