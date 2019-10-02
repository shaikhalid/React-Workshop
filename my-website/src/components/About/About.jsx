import React from "react";
import "./About.css";
import { MySummary } from "../MySummary/MySummary.jsx";
import { MyInfo } from "../MyInfo/MyInfo.jsx";

export const About = props => (
  <div className="About">
    <div className="col1">
      <img className="img-fluid rounded mx-1"src="https://lmpixels.com/demo/unique/unique-vcard/images/photo.png" alt="YOUR IMAGE"/>
    </div>
    <div className="col2">
      <MySummary title={props.about.title} content={props.about.content} />          
    </div>
    <div className="col3">
      <MyInfo name={props.about.name}
                age={props.about.age}
                phone={props.about.phone} 
                email={props.about.email}/>
    </div>
   
    
  </div>
);
