import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const NotesContainer = props => {
  return (
    <div>
      <br />
      <ListGroup>
        {props.tasks.map(task => (
          <ListGroupItem
            key={task.title}
            style={{ backgroundColor: "transparent" }}
          >
            <b style={{ marginInlineEnd: 10 + "px" }}>{task.title}</b>
            {task.description}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default NotesContainer;
