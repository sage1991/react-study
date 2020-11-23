import React, { FC } from "react";
import "./LoadingIndicator.css";


export const LoadingIndicator: FC = () => {
  return (
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}