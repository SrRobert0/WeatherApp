import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GetCityCoordinatesByName } from "../utils/ApiUtils";

export function Header({ setCityData, setData }) {
  const [cityName, setCityName] = useState("");

  async function handleSearchButtonClick() {
    const { cityData, data } = await GetCityCoordinatesByName(cityName);

    setCityData(cityData);
    setData(data);
  }

  return (
    <header className="header d-flex align-items-center">
      <div className="input-group search-bar mx-3">
        <input
          type="text"
          className="input-search form-control px-3 py-1"
          onChange={(e) => setCityName(e.target.value)}
        />
        <button
          className="btn btn-dark py-1 px-2"
          onClick={() => handleSearchButtonClick()}
        >
          <BsSearch color="#000" />
        </button>
      </div>
    </header>
  );
}
