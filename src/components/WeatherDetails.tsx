import React, { useState, useEffect } from "react";

interface IWeatherDetails {
  date: string;
  temp: number | string;
  desc: string;
  main: string;
  pressure: number | string;
  humidity: number | string;
}

const WeatherDetails = ({
  date,
  temp,
  desc,
  main,
  pressure,
  humidity,
}: IWeatherDetails) => {
  const [isMobile, setIsMobile] = useState(false);

  const constants = [
    "Date(mm/dd/yy)",
    "Temp",
    "Description",
    "Main",
    "Pressure",
    "Humidity",
  ];

  const handleResize = () => {
    console.log(window.innerWidth);

    if (window.innerWidth < 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <div className="mt-[120px] flex flexZ-col items-center justify-center">
      {isMobile ? (
        <table className="border-collapse border border-slate-400 w-full text-left">
          <thead>
            <tr className="bg-blue-100">
              <th className="border text-left border-slate-300 p-5">
                {"Date(mm/dd/yy)"}
              </th>
              <th className="border text-left border-slate-300 p-5">Temp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-5 border-slate-300">{date}</td>
              <td className="border p-5 border-slate-300">{temp}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table className="border-collapse border border-slate-400 lg:w-[800px]">
          <thead>
            <tr className="bg-blue-100">
              {constants.map((data, index) => (
                <th
                  className="border text-left border-slate-300 p-5"
                  key={index}
                >
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-5 border-slate-300 ">{date}</td>
              <td className="border p-5 border-slate-300 ">{temp}</td>
              <td className="border p-5 border-slate-300">{desc}</td>
              <td className="border p-5 border-slate-300">{main}</td>
              <td className="border p-5 border-slate-300">{pressure}</td>
              <td className="border p-5 border-slate-300">{humidity}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WeatherDetails;
