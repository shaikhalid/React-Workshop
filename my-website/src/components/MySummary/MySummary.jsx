import React from "react";
import "./MySummary.css";

export const MySummary = (props) => (
    <React.Fragment>
        <p class="font-weight-bold text-md-left">{props.title}</p>
        <p>{props.content}</p>    
    </React.Fragment>
    
);
