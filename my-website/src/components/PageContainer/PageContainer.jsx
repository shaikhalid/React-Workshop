import React from "react";
import "./PageContainer.css";
import { About } from "../About/About.jsx";
import { Home } from "../Home/Home.jsx";
import Tasks from "../Notes/Notes";

export const PageContainer = props => {
  if (props.onpage === "About") {
    return (
      <div className="m-5">
        <div className="PageContainer bg-dark text-light p-3 rounded special-card">
          <About about={props.about} />
        </div>
      </div>
    );
  } else if (props.onpage === "Notes") {
    return (
      <div className="m-5">
        <div className="PageContainer bg-dark text-light p-3 rounded">
          <Tasks />
        </div>
      </div>
    );
  } else {
    return (
      <div className="m-5">
        <div className="PageContainer bg-dark text-light p-3 rounded">
          <Home />
        </div>
      </div>
    );
  }
};
