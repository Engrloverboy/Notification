import React, { useState } from "react";
import styled from "styled-components";
import Spaces from "./Spaces";

const dummyTab = [
  {
    label: "Html",
    content: <Spaces />,
  },
  { label: "CSS", content: "I am CSS" },
  {
    label: "Javascript",
    content: "I am JS",
  },
];


const Tab = () => {
    const [activetab, setActiveTab] = useState(0);

    const HandleTab = (e) => {
        setActiveTab(e)
    }

  return (
    <TabsSTYLE>
      <div>
        {dummyTab.map((item, index) => (
          <button onClick={() => HandleTab(index)}>
            {item.label}
          </button>
        ))}
      </div>

      <div>{dummyTab[activetab].content}</div>
    </TabsSTYLE>
  );
};

export default Tab;

let TabsSTYLE = styled.section`
  max-width: 700px;
  background-color: pink;
  margin: 0 auto;
  button {
    margin: 20px;

    padding: 10px 15px;
  }
`;
