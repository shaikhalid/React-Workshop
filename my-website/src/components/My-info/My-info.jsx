import React from "react";
import "./My-info.css";

export const MyInfo = props => (
  <div className="MyInfo">
    <h1>{props.title}</h1>
    <h4>{props.content}</h4>
  </div>
);
