import React, { Component } from "react";
import "./About.css";
import { MySummary } from "../MySummary/MySummary.jsx";
import { MyInfo } from "../MyInfo/MyInfo.jsx";

class About extends Component {
  state = {
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

  render() {
    return (
      <div className="About">
        <div className="col1">
          <img
            className="img-fluid rounded mx-1"
            src="https://lmpixels.com/demo/unique/unique-vcard/images/photo.png"
            alt="meeeeeee"
          />
        </div>
        <div className="col2">
          <MySummary
            title={this.state.about.title}
            content={this.state.about.content}
          />
        </div>
        <div className="col3">
          <MyInfo
            name={this.state.about.name}
            age={this.state.about.age}
            phone={this.state.about.phone}
            email={this.state.about.email}
          />
        </div>
      </div>
    );
  }
}

export default About;
