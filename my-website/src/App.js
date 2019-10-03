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
      about: {
        title: "I am a WebDeveloper @noWhere",
        content:
          "Id mollit dolor ex laboris veniam est excepteur. Aliqua anim cillum ea proident excepteur officia deserunt. Excepteur adipisicing commodo laborum elit sit eiusmod anim. Aliqua esse fugiat incididunt non laboris est elit quis ullamco.",
        name: "Shaikh Khalid",
        age: "20",
        phone: "9136723049",
        email: "shaikhalidwork@gmail.com"
      }
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

        <PageContainer onpage={this.state.onpage} about={this.state.about} />
      </div>
    );
  }
}

export default App;
