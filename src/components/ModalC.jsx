const Text = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <div>
            I am a Modal
          </div>
        </div>
      </div>
    )
  );
};

export default Text;
