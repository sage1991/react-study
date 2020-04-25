import React, { useEffect } from "react";
import CSS from "./Cockpit.css";

const Cockpit = (props) => {
  
  // run every update cycle
  useEffect(() => {
    const timer1 = setTimeout(() => {
      alert("[ Cockpit.js ] - useEffect 1");
    }, 1000);
    return () => {
      clearTimeout(timer1);
      console.log("[ Cockpit.js ] - cleanup work in useEffect 1");
    }
  });

  // run only if the component is created
  useEffect(() => {
    const timer2 = setTimeout(() => {
      alert("[ Cockpit.js ] - useEffect 2");
    }, 1000);
    return () => {
      clearTimeout(timer2);
      console.log("[ Cockpit.js ] - cleanup work in useEffect 2")
    }
  }, []);

  // run only if the specific property change (in this case, persons property)
  useEffect(() => {
    setTimeout(() => {
      alert("[ Cockpit.js ] - useEffect 3 : personsLength changed");
    }, 1000);
  }, [props.personsLength]);

  let toggleBtnClass;
  let isDisabled = false;
  if (props.personsLength === 0) {
    toggleBtnClass = CSS.disabled;
    isDisabled = true;
  }

  return (
    <div className={CSS.Cockpit}>
      <h1>{props.title}</h1>
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

export default React.memo(Cockpit);
