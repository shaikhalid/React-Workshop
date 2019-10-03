import React from "react";
import "./App.css";
import { NavbarTop } from "./components/NavbarTop/NavbarTop.jsx";
import { PageContainer } from "./components/PageContainer/PageContainer.jsx";
import { BG } from "./components/bg/bg";
// import { BG } from "./components/bg/bg.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      onpage: "Home",
      title: "Shaikh Khalid",
      subtitle: "Coming sooon web developer"
    };
  }

  componentDidMount() {
    document.querySelectorAll(".btn").forEach(button => {
      button.addEventListener("click", () => {
        this.setState({ onpage: button.innerHTML });
        console.log(this.state.onpage);
      });
    });
  }

  render() {
    return (
      <div>
        <BG />
        <NavbarTop />
        <div className="m-5">
          <div className="PageContainer bg-dark text-light p-3 rounded">
            <PageContainer
              onpage={this.state.onpage}
              title={this.state.title}
              subtitle={this.state.subtitle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
