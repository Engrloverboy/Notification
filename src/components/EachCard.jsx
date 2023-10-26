import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EachCard = (props) => {
  return (
    <ACard className="eachCard">
      <img src={props.flag} alt="Card" />

      <div>
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
  a{
    text-decoration: none;
  }
`;
