import React, { Component } from "react";
import Navbar from "framework7";

const NavbarTop = () => {
  return (
    <Navbar title="My App">
      <a href="#" slot="nav-left">
        Left Link
      </a>
      <a href="#" slot="nav-right">
        Right Link
      </a>
      <div slot="before-inner">Before Inner</div>
      <div slot="after-inner">After Inner</div>
      <div>Default slot</div>
    </Navbar>
  );
};

export default NavbarTop;
