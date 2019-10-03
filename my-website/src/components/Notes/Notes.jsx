import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Notes.css";

class Tasks extends Component {
  state = {
    searchfield: "",

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
    this.setState({ searchfield: e.target.value });
  };

  handleAdd = e => {
    const inp = e.target.value;
    let newTask = { title: "task3", description: inp };
    let { tasks } = this.state;
    tasks.push(newTask);
    const newTasks = tasks;
    this.setState({ tasks: newTasks });
  };

  render() {
    const { tasks, searchfield } = this.state;
    const filteredTasks = tasks.filter(task =>
      task.description.toLowerCase().includes(searchfield.toLowerCase())
    );

    return (
      <React.Fragment>
        <p>
          <input
            className="notesInput"
            type="search"
            placeholder="Search"
            onChange={this.handleChange}
          ></input>
          <input className="notesInput" type="text" placeholder="Title"></input>
          <input
            className="notesInput"
            type="text"
            placeholder="Description"
          ></input>

          <Button className="addButton" onClick={this.handleAdd}>
            +
          </Button>
        </p>
        <div className="container">
          {filteredTasks.map(task => (
            <div className="row">
              <b className="col1">
                <div>{task.title}</div>
              </b>
              <div className="col1">
                <div>{task.description}</div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Tasks;
