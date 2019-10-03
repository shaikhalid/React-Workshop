import React, { Component } from "react";
import "./Notes.css";
import NotesInput from "../NotesInput/NotesInput.jsx";
import NotesContainer from "../NotesContainer/NotesContainer.jsx";

class Notes extends Component {
  state = {
    searchField: "",
    inputTitle: "",
    inputDescription: "",

    tasks: [
      {
        title: "task 1",
        description: "conduct workshop"
      },
      {
        title: "task 2",
        description: "don't sleep"
      }
    ]
  };

  handleChange = e => {
    this.setState(
      { [e.target.id]: e.target.value },
      console.log(this.state.inputTitle)
    );
  };

  handleAdd = e => {
    let newTask = {
      title: this.state.inputTitle,
      description: this.state.inputDescription
    };
    let { tasks } = this.state;
    tasks.push(newTask);
    this.setState({ tasks });
  };

  render() {
    const { tasks, searchField } = this.state;
    const filteredTasks = tasks.filter(task =>
      task.description.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <NotesInput
          onChange={this.handleChange}
          onAdd={this.handleAdd}
        ></NotesInput>
        <NotesContainer key="notes" tasks={filteredTasks}></NotesContainer>
      </div>
    );
  }
}

export default Notes;
