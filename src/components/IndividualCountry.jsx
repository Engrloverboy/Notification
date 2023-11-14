import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import EachBorder from "./EachBorder";

const IndividualCountry = (props) => {
  const { segun } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((sodiq) => {
        const matcgingCountry = sodiq.find(
          (simbi) => simbi.name.common === segun
        );
        setCountry(matcgingCountry);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [segun]);

  //   console.log(country)
  return (
    <ICountry>
      <div className="individual-country">
        <img src={country?.flags.png} alt="" />
        <div className="each-details">
          <h2>{country?.name.common}</h2>
          <ul>
            <li>
              Population: <span>{country?.population.toLocaleString()}</span>
            </li>
            <li>
              Region: <span>{country?.region}</span>
            </li>
            <li>
              Sub Region: <span>{country?.subregion}</span>
            </li>
            <li>
              Capital: <span>{country?.capital}</span>
            </li>
            <li>
              Top Level: <span></span>
            </li>
            {/* <li>
              Currencies: <span>{country?.currencies}</span>
            </li>
            <li>
              Languages: <span>{country?.languages}</span>
            </li> */}
          </ul>

          <ul>
            {country.borders.map((country, index) => (
              <li key={index}>{country}</li>
            ))}
          </ul>
          <EachBorder tolu={country?.borders} />
        </div>
      </div>
    </ICountry>
  );
};

export default IndividualCountry;

let ICountry = styled.div`
  max-width: 1100px;
  margin: 50px auto;

  img {
    width: 40%;
    height: 40%;
    margin-right: 40px;
  }
  .individual-country {
    display: flex;
  }
  h2 {
    margin-bottom: 20px;
  }
  ul li {
    margin-bottom: 10px;
  }
`;
