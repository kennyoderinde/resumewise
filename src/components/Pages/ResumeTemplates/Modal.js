import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay sm:hidden">
      <div className="modal-content">
        {children}
        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
