import React from "react";
import styled from "styled-components";

const EachBorder = (props) => {
  const tolu = ["Spain", "Canada", "Mexico",8];
  return (
    <AllBorder>
      <h5>Border Countries:</h5>
      <ul>
        {props.tolu.map((country,index) => (
          <li key={index}>
            {country}
          </li>
        ))}
      </ul>
    </AllBorder>
  );
};

export default EachBorder;

let AllBorder = styled.div`
  display: flex;
  align-items: center;

  h5 {
    margin-right: 10px;
  }

  ul li {
    border: 1px black;
    display: inline-block;
    margin-right: 5px;
    font-size: 12px;
    padding: 3px 10px;
    color: White;
    background-color: red;
  }
`;
