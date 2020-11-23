import React, { FC } from "react";
import "./ErrorModal.css";


interface ErrorModalProps {
  onClose: () => void;
}

export const ErrorModal: FC<ErrorModalProps> = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onClose} />
      <div className="error-modal">
        <h2>An Error Occurred!</h2>
        <p>{props.children}</p>
        <div className="error-modal__actions">
          <button type="button" onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </>
  );
}