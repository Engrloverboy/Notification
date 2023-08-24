import React from "react";
import styled from "styled-components";

const Testimonial = (props) => {
  return (
    <EachTestimonial className="testy">
      <div className="rate-div">
        <h5 className="stars">{props.rate}</h5>
      </div>

      <div className="testimonial-div">
        <div className="wrap-profile">
          <div className="profile-img">
            <img src={props.profile} alt="" />
          </div>
          <div className="name-title">
            <h4>{props.name}</h4>
            <p className="title">{props.title}</p>
          </div>
        </div>
        <p className="bio">{props.bio}</p>
      </div>
    </EachTestimonial>
  );
};

export default Testimonial;

let EachTestimonial = styled.section`
  .testimonial-div {
    background-color: hsl(300, 43%, 22%);
    color: hsl(0, 0%, 100%);
    max-width: 65%;
    border-radius: 5px;
    padding: 10px;
    // transform: scale(1);
    // transition: 0.5s;
  }
  &:hover {
    transform: scaleY(1.5);
  }
  .profile-img img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
  .wrap-profile {
    display: flex;
    align-items: center;
  }
  h4 {
    margin: 0;
    font-size: 10px;
  }
  .title {
    margin: 0;
    color: hsl(333, 80%, 67%);
    font-size: 10px;
  }
  .bio {
    font-size: 10px;
  }
`;
