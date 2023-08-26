import React from "react";
import styled from "styled-components";

const Workitmap = (props) => {
  return (
    <div className="container">
      <Eachworkit className="eachwork">
        <div className="number-div">
          <h5 className="number">{props.number}</h5>
        </div>
        <h3 className="subject">{props.subject}</h3>
        <p className="word">{props.word}</p>
      </Eachworkit>
    </div>
  );
};

export default Workitmap;

let Eachworkit = styled.div`
  border: 1px solid;
  padding: 20px;
  border-radius: 10px;
  background-color: hsl(300, 43%, 22%);
  color: white;
  margin: 30px 0;
  .number-div {
    text-align: center;
    margin-bottom: 30px;
  }
  .number {
    display: inline;
    border: 1px solid white;
    border-radius: 50%;
    padding: 10px;
    margin: 0 auto;
  }
`;
