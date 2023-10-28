import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EachCard = (props) => {
  return (
    <ACard className="eachCard">
      <img src={props.flag} alt="Card" />

      <div className="country-details">
        <Link to={props.dada}>
          <h2>{props.countryName}</h2>
        </Link>

        <ul>
          <li>
            Population: <span>{props.population}</span>
          </li>
          <li>
            Region: <span>{props.europe}</span>
          </li>
          <li>
            Capital: <span>{props.washington}</span>
          </li>
        </ul>
      </div>
    </ACard>
  );
};

export default EachCard;

let ACard = styled.section`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  a {
    text-decoration: none;
  }

  .country-details {
    padding: 20px;
    h2 {
      font-size: 16px;
      margin-bottom: 20px;
    }
    ul {
      font-size: 14px;

      line-height: 1.5;
    }
  }
`;
