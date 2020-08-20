import React, { Component } from "react";
import { PizzaImage } from "../components/pizza/PizzaImage";

class Pizza extends Component {

  render() {
    return (
      <div>
        <h1>the pizza</h1>
        <PizzaImage />
      </div>
    );
  }
}

export { Pizza };