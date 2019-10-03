import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./Home.css";

const Home = props => {
  return (
    <div>
      <Jumbotron fluid style={{ backgroundColor: "transparent" }}>
        <Container fluid>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">{props.subtitle}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
