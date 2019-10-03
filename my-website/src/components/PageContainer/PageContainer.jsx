import React from "react";
import "./PageContainer.css";
import { About } from "../About/About.jsx";
import { Home } from "../Home/Home.jsx";
import { Resume } from "../Resume/Resume.jsx";

export const PageContainer = props => {
  if (props.onpage === "About") {
    return (
      <div className="m-5">
        <div className="PageContainer bg-dark text-light p-3 rounded special-card">
          <About about={props.about} />
        </div>
      </div>
    );
  } else if(props.onpage === "Resume") {
    console.log(props.resume)
    return (
      <div className="PageContainer bg-dark text-light p-3  m-5 rounded">
        <Resume resume={props.resume} />
      </div>
    );
  }
  else{
    return (
      <div className="m-5">
        <div className="PageContainer bg-dark text-light p-3 rounded">
          <Home />
        </div>
      </div>
    );
  }
};
