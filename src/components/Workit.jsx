import React from "react";
import Workitmap from "./Workitmap";
import styled from "styled-components";
import DemoTest from "../assets/json/dummyData3";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Workit = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {DemoTest.map((eachwork) => (
        <Workitmap
          number={eachwork.number}
          subject={eachwork.subject}
          word={eachwork.word}
        />
      ))}
    </Slider>
  );
};

export default Workit;

let Work = styled.div``;
