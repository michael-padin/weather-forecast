import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { WeatherDetails } from "../components";

interface IWeatherDetails {
  date: string;
  temp: number;
  desc: string;
  main: string;
  pressure: number;
  humid: number;
}

const Weather = () => {
  const [weatherDetails, setWeatherDetails] = useState<IWeatherDetails>({
    date: "",
    temp: 0,
    desc: "",
    main: "",
    pressure: 0,
    humid: 0,
  });
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const {date, temp, desc, main, pressure, humid} = weatherDetails

  useEffect(() => {

    // redirect if there are no state available in the location
    if (!state) navigate("/")
    
    setWeatherDetails((prevVal) => {
      return {
        ...prevVal,
        date: new Date(state.dt * 1000).toLocaleDateString(),
        temp: state.main.temp,
        desc: state.weather[0].description,
        main: state.weather[0].main,
        pressure: state.main.pressure,
        humid: state.main.humidity,
      };
    });

    return () => {
      setWeatherDetails({
        date: "",
        temp: 0,
        desc: "",
        main: "",
        pressure: 0,
        humid: 0,
      });
    };
  }, [navigate, state]);

  return (
    <div className="flex items-center justify-center pb-5">
      <div className="sm:w-full sm:px-5 md:lg:w-auto">
        <WeatherDetails
          date={date}
          temp={temp}
          desc={desc}
          main={main}
          pressure={pressure}
          humidity={humid}
        />
        <div className="flex sm:mt-[100px] md:mt-[200px] justify-end">
          <button
            className="sm:px-[2rem] sm:text-[16px] py-[.5rem] md:px-[3rem] md:py-[.8rem] text-[18px] bg-[#118be4] text-white rounded-md font-bold"
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
