import React from "react";
import { useNavigate } from "react-router";
import { WeatherDetails } from "../components";

const Weather = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <div>
        <WeatherDetails
          date="02/21/2024"
          temp="85"
          desc="Nice Cloud"
          main="clear"
          pressure="100"
          humidity="100"
        />
        <div className="flex mt-[200px] justify-end">
          <button
            className="px-[3rem] py-[.8rem] text-[18px] bg-[#118be4] text-white rounded-md font-bold"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Weather;
