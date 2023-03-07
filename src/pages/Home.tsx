import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

import { DisplayProfile, SearchCity } from "../components";

const Home = () => {
  const [searchCity, setSearchCity] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    navigate("/login");
  }
  /* we will set our searchCity state
   * from our input value on change
   */
  const handleChange = (e: any) => {
    setErrorMessage("");
    setSearchCity(e.target.value);
  };

  /**
   * This will trigger if search button is clicked
   */
  const handleSearch = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=1b80058ed58ceda2551cee2f519ae5b8`
      );

      /* pass data as state so that we can access to the next page */
      navigate("/weather", { state: data });
    } catch (e: any) {
      /**
       * Set error message for visualization
       */
      setErrorMessage(e.response.data.message);
    }
  };

  return (
    <div className="flex flex-col lg:w-auto justify-center flex-wrap">
      <div className="sm:hidden md:lg:block w-[100%] flex text-[18px] justify-center">
        <DisplayProfile name={user?.name} nickname={user?.nickname} />
      </div>
      <div className="mt-[100px] flex i1tems-center justify-center ">
        {/**
         * made to component so that we can reuse it in future
         *  >Will accept onChange, handleSubmit, and ErrorMessage Props
         */}
        <SearchCity
          handleChange={handleChange}
          handleSearch={handleSearch}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
};

export default Home;
