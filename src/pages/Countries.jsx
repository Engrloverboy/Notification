import React, { useEffect, useState } from "react";
import EachCard from "../components/EachCard";
import styled from "styled-components";
// import Notifylist from "../assets/json/dummyData";

const Countries = () => {
  const [country, setCountry] = useState([]);

  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((sodiq) => setCountry(sodiq));
  }, []);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((sodiq) => setSearchValue(sodiq));
  }, []);

   const handleSearchChange = (vendor) => {
     setSearchValue(vendor.target.value);
   };

  return (
    <section>
      <div>
        <input
          value={searchValue}
          onChange={handleSearchChange}
          type="text"
          placeholder="Search"
        />
      </div>
      <AllCards>
        {country.map((countries, index) => (
          <EachCard
            key={index}
            countryName={countries.name.common}
            flag={countries.flags.png}
            population={countries.population.toLocaleString()}
            europe={countries.region}
            washington={countries.capital}
          />
        ))}
      </AllCards>
    </section>
  );
};

export default Countries;

let AllCards = styled.section`
  padding: 100px 20px;

  img {
    width: 100%;
  }
  .eachCard {
    margin-bottom: 30px;
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
