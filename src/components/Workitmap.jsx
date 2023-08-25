import React from "react";
import styled  from "styled-components";

const Workitmap = (props) => {
  return (
    <div className="container">
      <Eachworkit className="eachwork">
        <h5 className="number">{props.number}</h5>
        <h3 className="subject">{props.subject}</h3>
        <p className="word">{props.word}</p>
      </Eachworkit>
    </div>
  );
};

export default Workitmap;

let Eachworkit = styled.div`
// background-color: blue;
margin: 30px 0;
.number{
    display: inline;
    border: 1px solid black;
    border-radius: 50%;
    padding: 10px
}
`
