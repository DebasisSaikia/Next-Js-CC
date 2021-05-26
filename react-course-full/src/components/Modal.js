import React from "react";

const Modal = ({ cancel }) => {
  return (
    <div className="modal">
      <h1>Are you sure?</h1>
      <button onClick={cancel}>Cancel</button>
      <button>Confirm</button>
    </div>
  );
};

export default Modal;
