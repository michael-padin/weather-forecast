import React from "react";

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
  const constants = [
    "Date(mm/dd/yy)",
    "Temp",
    "Description",
    "Main",
    "Pressure",
    "Humidity",
  ];

  return (
    <div className="mt-[120px] flex flex-col items-center justify-center overflow-x-scroll">
      <table className="border-collapse border border-slate-400 w-[800px]">
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
            <td className="border p-5 border-slate-300">{date}</td>
            <td className="border p-5 border-slate-300">{temp}</td>
            <td className="border p-5 border-slate-300">{desc}</td>
            <td className="border p-5 border-slate-300">{main}</td>
            <td className="border p-5 border-slate-300">{pressure}</td>
            <td className="border p-5 border-slate-300">{humidity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherDetails;
