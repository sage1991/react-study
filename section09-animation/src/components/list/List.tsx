import React, { Component } from "react";
import css from "./List.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";


const classNames: CSSTransitionClassNames = {
  enter: css.fadeEnter,
  enterActive: css.fadeEnterActive,
  enterDone: css.fadeEnterDone,
  exit: css.fadeExit,
  exitDone: css.fadeExitDone,
  exitActive: css.fadeExitActive
}


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
        <TransitionGroup
          component="ul"
          className={css.list}>
          { this.renderItems() }
        </TransitionGroup>
      </div>
    );
  }

  private renderItems = () => this.state.items.map((item, index) => (
    <CSSTransition 
      key={index} 
      classNames={classNames} 
      timeout={300}>
      <li
        className={css.listItem} 
        onClick={this.removeItem.bind(this, index)}>
        { item }
      </li>
    </CSSTransition>
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