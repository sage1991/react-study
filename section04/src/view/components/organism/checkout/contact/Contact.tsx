import React, { Component, FormEvent, ChangeEvent } from "react";
import css from "./Contact.module.css";
import { BurgerModel } from "../../../../../business/model/BurgerModel";
import { Callback } from "../../../../../core/types/function/Callback";
import { Input } from "../../../../../core/component/atom/input/Input";
import { InputType } from "../../../../../core/code/input/InputType";
import { Button } from "../../../../../core/component/atom/button/Button";
import { ButtonType } from "../../../../../core/code/button/ButtonType";
import { ContectModelBuilder } from "../../../../../business/model/ContectModel";
import { validate } from "../../../../../core/utils/validation/Validate";
import { ValidationModelBuilder } from "../../../../../core/utils/validation/model/ValidationModel";
import { Constraint } from "../../../../../core/code/common/Constraint";
import { FlexView } from "../../../../../core/component/atom/flex/FlexView";
import { FlexDirection } from "../../../../../core/code/flex/FlexDirection";
import { CrossAxisAlignment } from "../../../../../core/code/flex/CrossAxisAlignment";
import { Margin } from "../../../../../core/component/atom/margin/Margin";
import { Padding } from "../../../../../core/component/atom/padding/Padding";
import { OrderModelBuilder } from "../../../../../business/model/OrderModel";


const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const numeric = /^\d+$/;


class Contact extends Component<ContactProps, ContactState> {

  state = {
    name: {
      value: "",
      valid: false,
    },
    street: {
      value: "",
      valid: false,
    },
    email: {
      value: "",
      valid: false,
    },
    cellphone: {
      value: "",
      valid: false,
    }
  }

  private validation = {
    name: [ new ValidationModelBuilder().type(Constraint.STRING).build(), new ValidationModelBuilder().type(Constraint.MIN_LENGTH).constraint(3).build() ],
    street: [ new ValidationModelBuilder().type(Constraint.NOT_EMPTY).build() ],
    email: [ new ValidationModelBuilder().type(Constraint.REGEX).constraint(emailRegex).build() ],
    cellphone: [ new ValidationModelBuilder().type(Constraint.REGEX).constraint(numeric).build() ],
  }

  private get submitable() {
    const keys = Object.keys(this.state) as (keyof ContactState)[];
    let _submitable = true;
    for (let i = 0; i < keys.length; i++) {
      _submitable = _submitable && this.state[keys[i]].valid;
    }
    return _submitable;
  }

  render() {
    const { name, street, email, cellphone } = this.state;
    return (
      <div className={css.contect}>
        <h4>- Enter your contact data -</h4>
        <form onSubmit={this.onSubmit}>
          <FlexView direction={FlexDirection.COLUMN} crossAxisAlignment={CrossAxisAlignment.STRETCH}>
            <Margin className={css.inputFieldMargin}>
              <Padding className={css.inputFieldPadding}>
                <Input className={css.inputField} name="name" value={name.value} placeholder="Your Name" onChange={this.onChange} />
                <Input className={css.inputField} name="street" value={street.value} placeholder="street" onChange={this.onChange} />
                <Input className={css.inputField} name="email" value={email.value} placeholder="your email" onChange={this.onChange} />
                <Input className={css.inputField} name="cellphone" value={cellphone.value} type={InputType.TEL} placeholder="your cellphone" onChange={this.onChange} />
                <Button className={css.orderButton} type={ButtonType.SUBMIT} disabled={!this.submitable}>order</Button>
              </Padding>
            </Margin>
          </FlexView>
        </form>
      </div>
    );
  }

  private onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contectModel = new ContectModelBuilder().name(this.state.name.value)
                                                  .street(this.state.street.value)
                                                  .email(this.state.email.value)
                                                  .cellphone(this.state.cellphone.value)
                                                  .build();
    const orderModel = new OrderModelBuilder().contect(contectModel)
                                              .burger(this.props.model)
                                              .build();
    this.props.onOrder(orderModel);
  }

  private onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const validatoinModels = this.validation[name as keyof ContactState];
    const updatedState = { [ name ] : { value: value, valid: validate(value, validatoinModels) } };
    this.setState({ ...this.state, ...updatedState });
  }

}

interface ContactProps {
  model: BurgerModel;
  onOrder: Callback;
}

interface ContactState {
  name: { value: string };
  street: { value: string };
  email: { value: string };
  cellphone: { value: string };
}

export { Contact };