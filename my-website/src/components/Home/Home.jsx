import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./Home.css";

export const Home = () => (
  //   <div className="Home text-light rounded center-div">
  //     <div className="Text center-div">
  //       <h1>Shaikh Khalid</h1>
  //       <h1>Coming Soon Web Developer</h1>
  //     </div>
  //   </div>

  <div>
    <Jumbotron fluid style={{ backgroundColor: "transparent" }}>
      <Container fluid>
        <h1 className="display-3">Shaikh Khalid</h1>
        <p className="lead">Coming Soon Web Developer</p>
      </Container>
    </Jumbotron>
  </div>
);
