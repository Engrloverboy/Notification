import React from "react";
import styled from "styled-components";

const Notification = (props) => {
  const reaction = false;
  const TheDataitself = "My first tournament today!";
  const textForReaction = "reacted to your recent post";
  const followedyou = "followed you";
  const followed = true;

  return (
    <EachNotification className="eachnotice">
      <div className="border-center">
        {/* THis condition checks for friends that follow */}
        {props.followed && (
          <div className="all" id={props.opened ? "yellowGuy" : ""}>
            <div className="image-div">
              <img src={props.image} alt="" />
            </div>
            <div className="right_flex">
              <h4 className="name">
                {props.name} <span className="reaction">{followedyou}</span>{" "}
              </h4>
              <small className="time">{props.time}</small>
            </div>
          </div>
        )}

        {/* THis condition checks for friends that reaction */}
        {props.reaction && (
          <div className="all" id={props.opened ? "yellowGuy" : ""}>
            <div className="image-div">
              <img src={props.image} alt="" />
            </div>
            <div className="right_flex">
              <h4 className="name">
                {props.name} <span className="reaction">{textForReaction}</span>{" "}
                <span className="the_data">{props.TheDataitself}</span>
              </h4>
              <small className="time">{props.time}</small>
            </div>
          </div>
        )}
      </div>
    </EachNotification>
  );
};

export default Notification;

let EachNotification = styled.section`
  // padding: 30px 0;
  .the_data {
    color: red;
  }
  #yellowGuy {
    background-color: blue;
  }
  .reaction {
    font-weight: 300;
  }
  .border-center {
    border: 1px;
    max-width: 600px;
    margin: 0 auto;

    // background: hsl(205, 33%, 90%);
    border-radius: 10px;
    padding: 12px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
    object-fit: cover;
  }
  .all {
    display: flex;
    align-items: center;
    background: hsl(205, 33%, 90%);
    padding: 10px;
    border-radius: 5px;
  }
  .name {
    margin: 0;
    font-size: 11px;
    font-weight: 800;
  }
  .time {
    font-size: 10px;
    color: hsl(219, 12%, 42%);
  }
  .comments {
    border: 1px solid hsl(205, 33%, 90%);
    padding: 5px 0;
    font-size: 10px;
    color: hsl(219, 12%, 42%);
    margin: 0;
    border-radius: 5px;
  }
`;
