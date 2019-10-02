import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap"

export const NavbarTop = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" className="rounded m-1">

        <Nav className="mr-auto">
          <Button className="mx-1">Home</Button>
          <Button className="mx-1">About</Button>
          <Button className="mx-1">Resume</Button>
        </Nav>
      
      </Navbar>
    </React.Fragment>
  );
};
