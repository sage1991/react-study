import React, { Component } from "react";
import css from "./List.module.css";

class List extends Component<{}, ListState> {

  state: ListState = {
    items: [ 1, 2, 3 ]
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.addItem}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <ul className={css.list}>
          { this.renderItems() }
        </ul>
      </div>
    );
  }

  private renderItems = () => this.state.items.map((item, index) => (
    <li 
      key={index} 
      className={css.listItem} 
      onClick={this.removeItem.bind(this, index)}>
      { item }
    </li>
  ));

  private removeItem = (index: number) => this.setState(prev => ({
    items: prev.items.filter((item, i) => i !== index)
  }));

  
  private addItem = () => this.setState(prev => ({
    items : [ ...prev.items, prev.items.length + 1 ]
  }));

}

interface ListState {
  items: number[];
}


export { List };