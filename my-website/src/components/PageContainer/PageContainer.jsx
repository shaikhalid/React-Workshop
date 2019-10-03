import React from "react";
import "./PageContainer.css";
import { About } from "../About/About.jsx";
import { Home } from "../Home/Home.jsx";
import { Resume } from "../Resume/Resume.jsx";

export const PageContainer = props => {
  if (props.onpage === "About") {
    return (
        <div className="PageContainer bg-dark text-light m-1 rounded ">
          <About about={props.about} />
        </div>
    );
  } else if(props.onpage === "Resume") {
    console.log(props.resume)
    return (
      <div className="PageContainer bg-dark text-light  m-1 rounded">
        <Resume resume={props.resume} />
      </div>
    );
  }
  else{
    return (
        <div className="PageContainer bg-dark text-light m-1 rounded">
          <Home />
        </div>
    );
  }
};
