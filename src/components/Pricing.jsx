import React from 'react'

const Pricing = (props) => {
  return (
    <div className="black" onClick={props.cls}>
      <div className="theMain" onClick={props.sml}>
        <button>Close</button>

        <h2>This is the Modal itself</h2>
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
}

export default Pricing