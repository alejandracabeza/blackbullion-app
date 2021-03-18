import React from "react";

function Modal({ data: cardModal, onClick: handleClick }) {
  return (
    <div>
      <div className="modalContainer">
        <p className="closeModal" onClick={handleClick}>
          Close
        </p>
        <h2>{cardModal.title}</h2>
        <p>{cardModal.description}</p>
        <h4>Duration: {cardModal.duration} min</h4>
        <div className="linkCourse">
          <a href={cardModal.url} target="_blank" rel="noreferrer">
            Start Pathway
          </a>
        </div>
      </div>

      <div>
        <div className="modal-overlay" id="modal-overlay"></div>
      </div>
    </div>
  );
}

export default Modal;
