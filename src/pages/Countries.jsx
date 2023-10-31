import React, { useEffect, useState } from "react";
import EachCard from "../components/EachCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainFaQ from "./MainFaQ";
// import Notifylist from "../assets/json/dummyData";

const Countries = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((sodiq) => setCountry(sodiq));
      setLoading(false)
  }, []);

  const FilteredCountries = country.filter((come) =>
    come.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  const countrySearchChange = (vendor) => {
    setSearchValue(vendor.target.value);
  };

  return (
    <section>
      <div className="filter-flex">
        <input
          value={searchValue}
          onChange={countrySearchChange}
          type="text"
          placeholder="Search"
        />
        <select name="select" id="select-rg">
          <option value="">Filter by Region</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
      </div>

      {loading ? (
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <AllCards>
          {/* {FilteredCountries.length === 0 ? (
            <div>No results found for the given search.</div>
          ) : (
            FilteredCountries.map((countries, index) => (
              <EachCard
                key={index}
                countryName={countries.name.common}
                flag={countries.flags.png}
                population={countries.population.toLocaleString()}
                europe={countries.region}
                washington={countries.capital}
              />
            ))
          )} */}

          <MainFaQ />
        </AllCards>
      )}
    </section>
  );
};

export default Countries;

let AllCards = styled.section`
  padding: 100px 20px;

  img {
    width: 100%;
    height: 50%;
  }
  .eachCard {
    margin-bottom: 30px;
  }
  .filter-flex {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 835px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .eachCard {
      width: 48%;
    }
  }

  @media (min-width: 1139px) {
    .eachCard {
      width: 32%;
    }
  }

  @media (min-width: 1250px) {
    .eachCard {
      width: 24%;
    }
  }
`;
