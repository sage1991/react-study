import React, { Component } from "react";
import Button, { ButtonType } from "../../../components/UI/Button/Button";
import css from "./ContectData.module.css";

class ContectData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  }

  render() {
    return (
      <div className={css.ContectData}>
        <h4>enter your contact data</h4>
        <form action="">
          <input className={css.Input} type="text" name="name" placeholder="Your Name"/>
          <input className={css.Input} type="email" name="email" placeholder="Your Email"/>
          <input className={css.Input} type="text" name="street" placeholder="Street"/>
          <input className={css.Input} type="text" name="postalCode" placeholder="Postal Code"/>
          <Button buttonType={ButtonType.Success} onClick={() => {}}>ORDER</Button>
        </form>
      </div>
    );
  }

}

export default ContectData;