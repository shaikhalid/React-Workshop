import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";

import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const NotesInput = () => {
  return (
    <div>
      <InputGroup className="m-2">
        <InputGroupAddon addonType="prepend">New</InputGroupAddon>
        <Input
          id="inputTitle"
          placeholder="Add title"
          onChange={() => this.props.onChange}
        />
        <Input
          id="inputDescription"
          placeholder="Add description"
          onChange={() => this.props.onChange}
          style={{ marginInlineEnd: 20 + "px" }}
        />
        <Button
          onClick={() => this.props.onAdd}
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
          onChange={() => this.props.onChange}
          style={{ marginInlineEnd: 20 + "px" }}
        />
      </InputGroup>
    </div>
  );
};

export default NotesInput;
