import React from "react";
import "./PageContainer.scss";
import About from "../About/About.jsx";
import Home from "../Home/Home.jsx";
import Notes from "../Notes/Notes.jsx";

export const PageContainer = props => {
  if (props.onpage === "Notes") return <Notes />;
  if (props.onpage === "About") return <About />;
  else return <Home title={props.title} subtitle={props.subtitle} />;
};
