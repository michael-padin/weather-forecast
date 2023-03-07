import React from "react";

import searchIcon from "../assets/search-icon.svg";

interface ISearchCity {
  handleChange: () => void;
  handleSearch: () => void;
}

const SearchCity = ({ handleChange, handleSearch }: ISearchCity) => {
  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSearch}
        className="flex items-center flex-col gap-6 text-[18px]"
      >
        <div className="flex items-center justify-center border-slate-500 border-[2px] rounded-full overflow-hidden  sm:w-auto lg:w-[400px] px-2 py-1">
          <img
            src={searchIcon}
            alt="Search City"
            className="w-[30px] h-[30px] p-1 object-contain"
          />
          <input
            placeholder="City"
            onChange={handleChange}
            className="outline-0 h-full w-full p-2 rounded-full "
          />
        </div>
        <button className="hover:border-[2px] rounded-md bg-[#118be4]  outline-none sm:px-[1rem] sm:py-[.5rem] md:lg:px-[1.5rem] md:lg:py-[.8rem] text-blue-50 ">
          Display Weather
        </button>
      </form>
    </div>  
  );
};

export default SearchCity;
