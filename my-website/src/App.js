import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "./components/Container/Container.jsx";
import { NavbarTop } from "./components/NavbarTop/NavbarTop.jsx";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <NavbarTop />
        <Container title="Shaikh Khalid" content="not much"></Container>
      </div>
    );
  }
}

export default App;
