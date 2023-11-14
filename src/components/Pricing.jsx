import React from 'react'

const Pricing = (props) => {
  return (
    <div className="black" onClick={props.cls}>
      <div className="theMain" onClick={props.sml}>
        <button>Close</button>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3971671173713!2d-82.40293782345363!3d34.84634996167522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88582b0ca234921b%3A0x26b8729ddd2a5a83!2sGruffyGoat!5e0!3m2!1sen!2sng!4v1699356144361!5m2!1sen!2sng"
          width="100%"
          height="450"
        //   style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Pricing