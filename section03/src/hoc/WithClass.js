import React from "react";

const WithClass = (ChildComponent, classes) => {
  return (props) => (
    <div className={classes}>
      <ChildComponent {...props} />
    </div>
  );
}
export default WithClass;