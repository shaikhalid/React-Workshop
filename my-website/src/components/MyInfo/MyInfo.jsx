import React from "react";
import "./MyInfo.css";

export const MyInfo = (props) => (
  <React.Fragment>
    <p> name : {props.name}</p>
    <p> age : {props.age}</p>
    <p> phone : {props.phone}</p>
    <p> email : {props.email}</p>
  </React.Fragment>
);
