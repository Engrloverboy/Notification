import React from 'react'
import Testimonial from './Testimonial'
import styled from "styled-components"
import Testlist from '../assets/json/dummyData2'

const Alltestimonial = () => {
  return (
    <Word>
      <div className="product-word">
        <h2>10,000+ of our users love our products.</h2>
        <p>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      {Testlist.map((testy) => (
        <Testimonial
          profile={testy.img}
          name={testy.name}
          title={testy.title}
          bio={testy.word}

        />
      ))}
    </Word>
  );
}

export default Alltestimonial

let Word = styled.div`
`