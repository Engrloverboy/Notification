import React from "react";
import Notification from "./Notification";
import notifylist from "../assets/json/dummyData";

const Allnotification = () => {
  return (
    <Notify>
      {notifylist.map((eachnotice) => (
        <Notification
          img={eachnotice.img}
          name={eachnotice.name}
          time={eachnotice.time}
        />
      ))}
    </Notify>
  );
};

export default Allnotification;
