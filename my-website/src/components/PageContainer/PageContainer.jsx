import React from "react";
import "./PageContainer.css";
import { About } from "../About/About.jsx";
import { Home } from "../Home/Home.jsx";
<<<<<<< HEAD
import { Resume } from "../Resume/Resume.jsx";

export const PageContainer = (props) => {
    if (props.onpage === "About")    {
        return(
            <div className="PageContainer bg-dark text-light p-3 rounded m-1">
                <About about={props.about}/>
            </div>
        )
    }

    else {
        return(
            <div className="PageContainer bg-dark text-light p-3 rounded m-1">
                <Resume resume={props.resume}/>
            </div> 
        )
    }
}
=======
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
>>>>>>> master
