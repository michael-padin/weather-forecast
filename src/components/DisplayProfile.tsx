import React from "react";

interface IDisplayProfile {
  name: string;
  nickname: string;
}

const DisplayProfile = ({ name, nickname }: IDisplayProfile) => {
  return (
    <div className="flex flex-col mt-[50px] gap-5 items-center">
      <p>{name}</p>
      <a href={`https://github.com/${nickname}`}>
        {`https://github.com/${nickname}`}
      </a>
    </div>
  );
};

export default DisplayProfile;
