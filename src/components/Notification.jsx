import React from "react";
import styled from "styled-components";

const Notification = (props) => {
  return (
    <EachNotification className="eachnotice">
      <div className="border-center">
        <div className="flex_notification">
          <div className="flex_word">
            <h4>Notifications</h4>
            <h5>3</h5>
          </div>
          <p>Mark all as read</p>
        </div>
        <div className="all">
          <img src={props.image} alt="" />
          <div className="right_flex">
            <p className="name">{props.name}</p>
            <small className="time">{props.time}</small>
          </div>
        </div>
      </div>
    </EachNotification>
  );
};

export default Notification;

let EachNotification = styled.section`
  background-color: rgb(249, 250, 254);
  .border-center {
    border: 1px;
    max-width: 600px;
    margin: 0 auto;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    padding: 12px;
  }
  .flex_notification {
    display: flex;
    justify-content: space-between;
  }
  .flex_word {
    display: flex;
    justify-content: space-around;
  }
`;
