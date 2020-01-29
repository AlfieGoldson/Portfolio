import React from "react";
import ScrollButton from "./scrollButton";
import "./header.css";

export default function Header() {
  return (
    <header
      id="header"
      className="alt"
    >
      <h1>Lorem Ipsum</h1>
      <h2>Full stack web developper</h2>
      <ScrollButton />
    </header>
  );
}
