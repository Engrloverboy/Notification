import React from "react";
import Testimonial from "./Testimonial";
import styled from "styled-components";
import Testlist from "../assets/json/dummyData2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Alltestimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Word className="container">
      <div className="product-word">
        <div className="user-words-div">
          <h2>10,000+ of our users love our products.</h2>
          <p className="user-words">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="star-rate">
          <h4 className="five-stars fs-rat">
            ⭐️⭐️⭐️⭐️⭐️ Rated 5 stars in Reviews
          </h4>
          <h4 className="five-stars fs-rate">
            ⭐️⭐️⭐️⭐️⭐️ Rated 5 stars in Report Guru
          </h4>
          <h4 className="five-stars fs-rates">
            ⭐️⭐️⭐️⭐️⭐️ Rated 5 stars in BestTech
          </h4>
        </div>
      </div>

      <div className="testimonial-flex">
        <Slider {...settings}>
          {Testlist.map((testy) => (
            <Testimonial
              profile={testy.img}
              name={testy.name}
              title={testy.title}
              bio={testy.word}
            />
          ))}
        </Slider>
      </div>
    </Word>
  );
};

export default Alltestimonial;

let Word = styled.div`
  //   width: 800px;
  margin: 0 auto;
  
  h2 {
    color: hsl(300, 43%, 22%);
  }
  .user-words {
    font-size: 10px;
    color: hsl(300, 43%, 22%);
  }
  .five-stars {
    border: 1px;
    background-color: hsl(300, 24%, 96%);
    color: hsl(300, 43%, 22%);
    font-size: 10px;
    padding: 10px 35px 10px 5px;
    border-radius: 5px;
  }
  .product-word {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-words-div {
    max-width: 25%;
  }
  .star-rate {
    position: relative;
  }
`;
