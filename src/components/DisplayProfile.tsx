
interface IDisplayProfile {
  name?: string;
  nickname?: string;
}

const DisplayProfile = ({ name, nickname }: IDisplayProfile) => {
  return (
    <div className="flex flex-col mt-[50px] gap-5 items-center">
      <p>{name}</p>

      {nickname && (
        <a
          href={`https://github.com/${nickname}`}
          target="_blank"
          rel="noreferrer"
        >
          {`https://github.com/${nickname}`}
        </a>
      )}
    </div>
  );
};

export default DisplayProfile;
