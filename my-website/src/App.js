import React from "react";
import "./App.css";
import { NavbarTop } from './components/NavbarTop/NavbarTop.jsx'
import { PageContainer } from './components/PageContainer/PageContainer.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      onpage : "Home",

      about : {
        title:"I am a WebDeveloper @noWhere",
        content: "Id mollit dolor ex laboris veniam est excepteur. Aliqua anim cillum ea proident excepteur officia deserunt. Excepteur adipisicing commodo laborum elit sit eiusmod anim. Aliqua esse fugiat incididunt non laboris est elit quis ullamco.",
        name: "Shaikh Khalid",
        age: "20",
        phone: "9136723049",
        email: "shaikhalidwork@gmail.com"
      },

      resume: [
        {
          topic:"Skills",
          part:["Laborum", "est", "Lorem", "aute", "culpa", ]
        },
        {
          topic:"Experience",
          part:["dolor", "voluptate", "nulla", "exercitation" ]
        },
        {
          topic:"Projects",
          part:["labore", "laborum", "tempor", "exercitation"]
        }
      ]
    };
  }

  componentDidMount() {
    document.querySelectorAll('.btn').forEach((button) => {
      button.addEventListener('click', () => {
        this.setState({onpage : button.innerHTML})
        console.log(this.state.onpage)
      })
    })
  }
  

  render() {
    return (
      <div>
        <NavbarTop />
        <PageContainer onpage={this.state.onpage} about={this.state.about} resume={this.state.resume}/>
      </div>
    );
  }
}

export default App;
