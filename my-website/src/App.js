import React from "react";
import "./App.css";
import {Main} from "./pages/Main/Main"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      onpage : "Home",

      about: {
        title: "I am a WebDeveloper @noWhere",
        content:
        "Id mollit dolor ex laboris veniam est excepteur. Aliqua anim cillum ea proident excepteur officia deserunt. Excepteur adipisicing commodo laborum elit sit eiusmod anim. Aliqua esse fugiat incididunt non laboris est elit quis ullamco.",
        name: "Shaikh Khalid",
        age: "20",
        phone: "9136723049",
        email: "shaikhalidwork@gmail.com"
      },

      resume: [
        {
          title:"Skills",
          part:["Laborum", "est", "Lorem", "aute" ]
        },
        {
          title:"Experience",
          part:["dolor", "voluptate", "nulla", "exercitation" ]
        },
        {
          title:"Projects",
          part:["labore", "laborum", "tempor", "exercitation"]
        }
      ]
      
    }
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
        <Main onpage={this.state.onpage} about={this.state.about} resume={this.state.resume}/>
    );
  }
}

export default App;
