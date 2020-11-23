import React, { FC } from "react";
import "./Card.css";

export const Card: FC = (props) => <div className="card">{ props.children }</div>;