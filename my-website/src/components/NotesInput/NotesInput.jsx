import React from "react";
import { Button } from "react-bootstrap";

import { InputGroup, InputGroupAddon, Input } from "reactstrap";

const NotesInput = props => {
  return (
    <div>
      <InputGroup className="m-2">
        <InputGroupAddon addonType="prepend">New</InputGroupAddon>
        <Input
          id="inputTitle"
          placeholder="Add title"
          onChange={props.onChange}
        />
        <Input
          id="inputDescription"
          placeholder="Add description"
          onChange={props.onChange}
          style={{ marginInlineEnd: 20 + "px" }}
        />
        <Button
          onClick={props.onAdd}
          style={{ marginLeft: 10 + "px", marginInlineEnd: 20 + "px" }}
        >
          Add
        </Button>
      </InputGroup>

      <br />
      <InputGroup className="m-2">
        <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
        <Input
          id="searchField"
          placeholder="keywords"
          onChange={props.onChange}
          style={{ marginInlineEnd: 20 + "px" }}
        />
      </InputGroup>
    </div>
  );
};

export default NotesInput;
