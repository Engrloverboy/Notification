// import React, { useState } from "react";

import { useState } from "react";

// const FAQ = (props) => {

//   return props.faqData.map((item) => (
//     <div key={item.id} className="faq-item">
//       <label>
//         {props.useCheckboxes ? (
//           <input type="checkbox" />
//         ) : (
//           <input type="radio" name="faq-radio" />
//         )}
//         {item.question}
//       </label>
//       <div className="answer">{item.answer}</div>
//     </div>
//   ));
// };

// export default FAQ;

export function Question({ question, answer,id }) {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="question-wrapper">
      <div className={`question ${isActive ? "active" : ""}`} id={id}>
        <h3>{question}</h3>
        <button onClick={handleClick}>
          <svg
            className={isActive ? "active" : ""}
            viewBox="0 0 320 512"
            width="100"
            title="angle-down"
          >
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg>
        </button>
      </div>
      <div className={`answer ${isActive ? "active" : ""}`}>{answer}</div>
    </div>
  );
}
