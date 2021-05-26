import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({ text }) => {
  const [open, setOpen] = useState(false);

  const deleteBtn = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="card">
        <h2>{text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteBtn}>
            Delete
          </button>
        </div>
        {open && <Modal cancel={() => setOpen(false)} />}
        {open && <Backdrop Close={() => setOpen(false)} />}
      </div>
    </>
  );
};

export default Todo;
