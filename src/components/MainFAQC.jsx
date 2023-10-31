import React, { useState } from "react";
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

const MainFAQC = () => {
  const [current, setCurrent] = useState(false);

  const openanswer = () => {
    setCurrent(!current);
  };
  return (
    <div>
      {questions.map((d) => (
        <StyledBy className="eachquestion" key={d.id}>
          <div>
            <h3 onClick={openanswer}>{d.question}Hello</h3>
            {/* <p className={current ? "demo" : ""}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          alias ab eaque dolorem sed. Nam in obcaecati deleniti, similique
          libero molestiae, rerum iure non illum vel tempora beatae vero
          dignissimos? Perferendis, minima placeat animi non beatae at
          voluptatibus sapiente pariatur ex autem, harum aut id aperiam. Sed
          similique quisquam eius tempore repudiandae velit repellendus,
          inventore assumenda deserunt consequatur voluptas exercitationem?
          Repellat necessitatibus cum odit nihil voluptas quas adipisci quae,
          eveniet vel officiis debitis totam enim consequatur aperiam blanditiis
          quia, ab a. Quia laudantium id quas dicta eum perspiciatis debitis
          blanditiis!
        </p> */}

            <p className={current ? "" : "hidder"}>{d.answer}</p>
          </div>
          {/* <div>
        <h3>React is Easy</h3>
        <p className="hidder">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          similique obcaecati officia exercitationem mollitia, soluta vel quod
          eos dignissimos adipisci harum temporibus quis distinctio, impedit
          beatae dolorem eius reprehenderit officiis?
        </p>
      </div> */}
        </StyledBy>
      ))}
    </div>
  );
};

export default MainFAQC;

let StyledBy = styled.div`
  .demo {
    background-color: blue;
  }
  .hidder {
    display: none;
  }
`;
