import React from "react";
import styled from "styled-components";

const Notification = (props) => {
  const reaction = false;
  const TheDataitself = "My first tournament today!";
  const textForReaction = "reacted to your recent post";
  const followedyou = "followed you";
  const followed = true;
  const messagesent = "sent a private message";
  const online = true;
  const commentonpicture = true;
  const textCommentOnPicture = "commented on your picture";

  return (
    <EachNotification className="eachnotice">
      <div className="border-center">
        {/* THis condition checks for friends that follow */}
        {props.followed && (
          <div
            className="all"
            id={props.opened ? "yellowGuy" : ""}
            onClick={props.opened}
          >
            <div className="image-div">
              <img src={props.image} alt="" />
              {props.online ? <span className="am_online"></span> : ""}
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
              {props.online ? <span className="am_online"></span> : ""}
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

        {/* {This condition checks for private message} */}
        {props.privatemessage && (
          <div className="all" id={props.opened ? "yellowGuy" : ""}>
            <div className="image-div">
              <img src={props.image} alt="" />
              {props.online ? <span className="am_online"></span> : ""}
            </div>
            <div className="right_flex">
              <h4 className="name">
                {props.name} <span className="reaction">{messagesent}</span>{" "}
                <p className="time">{props.time}</p>
                <p className="message">
                  Hello. thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and imporving my game.
                </p>
              </h4>
            </div>
          </div>
        )}

        {/* // { {This condition checks for comments on picture}} */}
        {commentonpicture && (
          <div className="all hall" id={props.opened ? "yellowGuy" : ""}>
            {/* <div className="flex-image"> */}
            <div className="user-flex">
              <div className="image-div">
                <img src={props.image} alt="" />
                {props.online ? <span className="am_online"></span> : ""}
              </div>
              <div className="right_flex">
                <h4 className="name">
                  {props.name}{" "}
                  <span className="reaction">{textCommentOnPicture}</span>{" "}
                  <p className="time">{props.time}</p>
                </h4>
              </div>
            </div>

            <div className="commentimage">
              <img
                src="https://images.unsplash.com/photo-1500258593672-b080c40f4b02?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2574"
                alt=""
              />
            </div>
            {/* </div> */}
          </div>
        )}
      </div>
    </EachNotification>
  );
};

export default Notification;

let EachNotification = styled.section`
  // padding: 30px 0;

  .flex-image {
    display: flex;
    justify-content: space-between;
  }
  .commentimage img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  .am_online {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
  }

  .image-div {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    .am_online {
      bottom: 0;
      right: 0;
      position: absolute;
    }
  }
  .message {
    border: 1px solid;
    border-radius: 5px;
    padding: 12px;
    color: hsl(219, 12%, 42%);
    margin: 10px 0 0 0;
    font-weight: 400;
  }
  .the_data {
    color: rgb(58, 87, 127);
  }
  .image-div {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    img {
      width: 50px;
      height: 50px;

      border-radius: 50%;
      margin-right: 20px;
      object-fit: cover;
    }
    .am_online {
      bottom: 0;
      right: 0;
      position: absolute;
    }
  }
  .am_online {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
    display: inline-block;
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

  .all {
    display: flex;
    align-items: center;
    background: hsl(205, 33%, 90%);
    padding: 10px;
    border-radius: 5px;
  }
  .hall {
    display: flex;
    justify-content: space-between;
  }
  .user-flex {
    display: flex;
    align-items: center;
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
