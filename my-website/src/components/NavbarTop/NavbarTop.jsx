import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const NavbarTop = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg">
        <Nav className="mr-auto">
          <Button className="mx-1" variant="dark">
            Home
          </Button>
          <Button className="mx-1" variant="dark">
            Resume
          </Button>
          <Button className="mx-1" variant="dark">
            Notes
          </Button>
          <Button className="mx-1" variant="dark">
            About
          </Button>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};
