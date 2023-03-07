
import searchIcon from "../assets/search-icon.svg";

interface ISearchCity {
  handleChange: (e: any) => void;
  handleSearch: (e: any) => void;
  errorMessage: string;
}

const SearchCity = ({
  handleChange,
  handleSearch,
  errorMessage,
}: ISearchCity) => {
  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSearch}
        className="flex items-center flex-col text-[18px]"
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
        {errorMessage && (
          <div className="text-red-500 w-full text-[16px] mt-1">
            <span>
              {errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1)}
            </span>
          </div>
        )}
        <button className="mt-[50px] hover:ring-2 ring-offset-2 rounded-md bg-[#118be4]  outline-none sm:px-[1rem] sm:py-[.5rem] md:lg:px-[1.5rem] md:lg:py-[.8rem] text-blue-50 ">
          Display Weather
        </button>
      </form>
    </div>
  );
};

export default SearchCity;
