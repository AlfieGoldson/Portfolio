import React from "react";
import "./header.css";
import BackgroundImage from "../images/header.jpg";

export default function Header() {
  return (
    <header
      id="header"
      className="alt"
      styles={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <h1>Lorem Ipsum</h1>
      <h2>Full stack web developper</h2>
    </header>
  );
}
