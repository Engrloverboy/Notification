import React from "react";
import styled from "styled-components";

const Notification = (props) => {
  return (
    <EachNotification className="eachnotice">
      <div className="border-center">
        <div className="all">
          <div className="image-div">
            <img src={props.image} alt="" />
          </div>
          <div className="right_flex">
            <h4 className="name">{props.name}</h4>
            <h4 className="name">{props.name}</h4>
            {/* <p className="comments">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem sint atque, esse dicta earum veritatis! Voluptate
              voluptas sequi quo architecto. Voluptate esse accusantium itaque
              officiis vitae iste aliquam, error facilis.
            </p> */}
            <small className="time">{props.time}</small>
          </div>
        </div>
      </div>
    </EachNotification>
  );
};

export default Notification;

let EachNotification = styled.section`
  // padding: 30px 0;
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
