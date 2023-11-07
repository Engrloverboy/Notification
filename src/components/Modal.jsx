import React, { useState } from 'react'
import styled from 'styled-components';
import Text from './ModalC';

const NotModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* <h2>Hello </h2> */}
      <button onClick={openModal}>Open Modal</button>
      <Text isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default NotModal;

let Modal = styled.section`
  h2 {
    color: red;
  }
`;