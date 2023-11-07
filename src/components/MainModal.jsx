import React, { useState } from "react";
import styled from "styled-components";
import Pricing from "./Pricing";

const MainModal = () => {
  const [modal, setModal] = useState(false);
  const [opened, closed] = useState(false);

  const OpenMdal = () => {
    setModal(true);
  };

  const Opentab = () => {
    closed(true);
  };

  const CloseModal = () => {
    setModal(false);
  };

  const Closetab = () => {
    closed(false);
  };

  const StopModal = (e) => {
    e.stopPropagation();
  };
  return (
    <ShopModal>
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nobis
      </h3>
      <button onClick={OpenMdal}>Add to Cart</button>
      <button onClick={Opentab}>Contact Author</button>
      {modal && <Pricing cls={CloseModal} sml={StopModal} />}

      {opened && (
        <div className="message-box" onClick={Closetab}>
          <div className="box" onClick={StopModal}>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <button>Close</button>
          </div>
        </div>
      )}
    </ShopModal>
  );
};

export default MainModal;

let ShopModal = styled.section`
  button {
    background: blue;
    color: white;
    border: 0;
    padding: 15px 20px;
  }
  .black {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .theMain {
    max-width: 700px;
    margin: 0 auto;
    background: white;
  }

  .box {
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
  }

  .message-box {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 50%;
  }
`;
