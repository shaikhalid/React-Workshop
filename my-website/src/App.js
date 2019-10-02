import React from "react";
import "./App.css";
import { Container } from "./components/Container/Container.jsx";
import { NavbarTop } from "./components/NavbarTop/NavbarTop.jsx";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Container title="Shaikh Khalid" content="not much">
        <NavbarTop></NavbarTop>
      </Container>
    );
  }
}

export default App;
