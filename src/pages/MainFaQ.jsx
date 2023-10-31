// import React, { useState } from "react";
// import FAQ from "../components/FAQTest";

// const faqData = [
//   {
//     id: 1,
//     question: "What is React?",
//     answer: "React is a JavaScript library for building user interfaces.",
//   },
//   {
//     id: 2,
//     question: "How do I use checkboxes?",
//     answer: "You can select multiple options using checkboxes.",
//   },
//   {
//     id: 3,
//     question: "How do I use radio buttons?",
//     answer: "You can select only one option using radio buttons.",
//   },
// ];

// const MainFaQ = () => {
//   const [useCheckboxes, setUseCheckboxes] = useState(true);

//   const toggleInputType = () => {
//     setUseCheckboxes(!useCheckboxes);
//   };
//   return (
//     <div className="faq-container">
//       <h2>FAQ</h2>
//       <div className="input-toggle">
//         <label>
//           <input
//             type="checkbox"
//             checked={useCheckboxes}
//             onChange={toggleInputType}
//           />
//           Use Checkboxes
//         </label>
//       </div>
//       <FAQ faqData={faqData} useCheckboxes={useCheckboxes} />
//     </div>
//   );
// };

// export default MainFaQ;

import React, { useState } from "react";
import { Question } from "../components/FAQTest";
import styled from "styled-components";

const questions = [
  {
    id: 1,
    question: "Popular Articles",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 2,
    question: "Fix problems & request removals",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 3,
    question: "Browse the web",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 4,
    question: "Search on your phone or tablet",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
];

const FAQ = () => {
  const [searchResults, setSearchResults] = useState(questions);

  return (
    <HaveUs className="container">
      <section className="faq">
        {searchResults.map((item) => (
          <Question
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </section>
    </HaveUs>
  );
};

export default FAQ;

const HaveUs = styled.section`
  .answer{
display: none;
  } .answer.active {
    display: block;
    text-align: left;
    padding-top: 1.5rem;
    font-weight: light;
    font-size: 0.8rem;
    line-height: 1.5;
    color: $secondary-text-color;
    height: 0%;
    animation: slidein 0.4s;
    animation-fill-mode: forwards;
  }
`;
