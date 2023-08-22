import React from "react";
import Notification from "./Notification";
import Notifylist from "../assets/json/dummyData";
import styled from "styled-components";

const Allnotification = () => {
  const NotificationNumber = Notifylist.length;
  return (
    <Test>
      <div className="flex_notification">
        <div className="flex_word">
          <h4>Notifications</h4>
          <h5>{NotificationNumber}</h5>
        </div>
        <p className="read">Mark all as read</p>
      </div>

      {Notifylist.map((eachnotice) => (
        <Notification
          image={eachnotice.img}
          time={eachnotice.time}
          name={eachnotice.name}
        />
      ))}

      {/* <Notification image={Angela} name="Sabinus" time="5mins ago" /> */}
      {/* <Notification name="Sabinus" time="5 mins ago" />
      <Notification name="Sabinus" time="5 mins ago" />
      <Notification name="Sabinus" time="5 mins ago" />
      <Notification name="Sabinus" time="5 mins ago" />
      <Notification name="Sabinus" time="5 mins ago" />
      <Notification name="Sabinus" time="5 mins ago" />
      <Notification name="Sabinus" time="5 mins ago" /> */}
    </Test>
  );
};

export default Allnotification;

let Test = styled.div`
  max-width: 700px;
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  .flex_notification {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
  }
  .flex_word {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .read {
    font-size: 10px;
    color: hsl(219, 12%, 42%);
  }
  h5 {
    border: 1px solid;
    padding: 0 5px;
    margin-left: 5px;
    border-radius: 5px;
    background-color: rgb(12, 52, 117);
    color: white;
  }
`;
