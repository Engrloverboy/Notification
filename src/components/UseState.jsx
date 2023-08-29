import React, { useState } from "react";
import styled from "styled-components";

const TestState = () => {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState("black");

  function IncreaseNumber() {
    setNumber(number + 1);
    setColor("blue");
  }
  const DecreaseNumber = () => {
    setNumber(number - 1);
    setColor("red");
  };
  const Reset = () => {
    setNumber(0);
    setColor("black");
  };

  return (
    <Diversity>
      <h2 className={color}>This is State Management Demo</h2>
      <button onClick={DecreaseNumber}>-</button>
      count : <span>{number}</span>
      <button onClick={IncreaseNumber}>+</button>
      <button onClick={Reset}>Reset</button>
    </Diversity>
  );
};

export default TestState;

let Diversity = styled.div`
  margin-top: 100px;
  h2 {
    text-align: center;
  }
  button {
    width: 40px;
    height: 40px;
    margin: 0 20px;
    font-size: 20px;
  }
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
  .black {
    color: black;
  }
`;
