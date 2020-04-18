import React from "react";
import CSS from "./Cockpit.css";

const Cockpit = (props) => {
  
  let toggleBtnClass;
  let isDisabled = false;
  if (props.persons.length === 0) {
    toggleBtnClass = CSS.disabled;
    isDisabled = true;
  }

  return (
    <div className={CSS.Cockpit}>
      <h1>Hello, React!</h1>
      <p>this is react app.</p>
      <button
        className={toggleBtnClass}
        disabled={isDisabled}
        onClick={props.onToggle}>
        toggle
      </button>
      <button className={CSS.reset} onClick={props.onReset}>
        reset
      </button>
    </div>
  );
};

export default Cockpit;
