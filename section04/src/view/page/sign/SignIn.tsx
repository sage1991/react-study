import React, { Component, FormEvent, ChangeEvent } from "react";
import css from "./SignIn.module.css";
import { RouteComponentProps } from "react-router-dom";
import { FlexView } from "../../../core/component/atom/flex/FlexView";
import { Input } from "../../../core/component/atom/input/Input";
import { Constraint } from "../../../core/code/common/Constraint";
import { ValidationModelBuilder } from "../../../core/utils/validation/model/ValidationModel";
import { Button } from "../../../core/component/atom/button/Button";
import { ButtonType } from "../../../core/code/button/ButtonType";
import { validate } from "../../../core/utils/validation/Validate";
import { FlexDirection } from "../../../core/code/flex/FlexDirection";
import { CrossAxisAlignment } from "../../../core/code/flex/CrossAxisAlignment";
import { Margin } from "../../../core/component/atom/margin/Margin";
import { Padding } from "../../../core/component/atom/padding/Padding";
import { InputType } from "../../../core/code/input/InputType";
import { InputStatus } from "../../../core/code/input/InputStatus";
import { Callback } from "../../../core/types/function/Callback";

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

class SignIn extends Component<SignInProps, SignInState> {

  state: SignInState = {
    email: {
      value: "",
      valid: false,
    },
    password: {
      value: "",
      valid: false,
    }
  }

  private validation = {
    email: [ new ValidationModelBuilder().type(Constraint.REGEX).constraint(emailRegex).build() ],
    password: [ 
      new ValidationModelBuilder().type(Constraint.NOT_EMPTY).build(), 
      new ValidationModelBuilder().type(Constraint.MIN_LENGTH).constraint(6).build() 
    ]
  }

  private get submitable() {
    const keys = Object.keys(this.state) as (keyof SignInState)[];
    let _submitable = true;
    for (let i = 0; i < keys.length; i++) {
      _submitable = _submitable && this.state[keys[i]].valid;
    }
    return _submitable;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className={css.signIn}>
        <form onSubmit={this.onSubmit}>
          <FlexView direction={FlexDirection.COLUMN} crossAxisAlignment={CrossAxisAlignment.STRETCH}>
            <Margin className={css.inputFieldMargin}>
              <Padding className={css.inputFieldPadding}>
                <Input 
                  className={css.inputField} 
                  name="email" 
                  value={email.value} 
                  placeholder="Mail Address" 
                  onChange={this.onChange}
                  status={this.getInputState("email")}
                  inputStyle={{ invalid: css.invalid, valid: css.valid }} />
                <Input 
                  className={css.inputField} 
                  name="password" 
                  value={password.value} 
                  placeholder="Password" 
                  onChange={this.onChange} 
                  type={InputType.PASSWORD}
                  status={this.getInputState("password")}
                  inputStyle={{ invalid: css.invalid, valid: css.valid }} />
                <Button className={css.signInButton} buttonStyle={{ disabled: css.disabled }} type={ButtonType.SUBMIT} disabled={!this.submitable}>sign-in</Button>
              </Padding>
            </Margin>
          </FlexView>
        </form>
      </div>
    );
  }


  private onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.requestSignIn(this.state.email.value, this.state.password.value, this.success, this.fail);
  }

  private onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const validationModels = this.validation[name as keyof SignInState];
    const updatedState = { [ name ]: { value: value, valid: validate(value, validationModels) } };
    this.setState({ ...this.state, ...updatedState });
  }

  private getInputState(name: keyof SignInState) {
    if (this.state[name].valid || this.state[name].value === "") {
      return InputStatus.VALID;
    } else {
      return InputStatus.INVALID;
    }
  }

  private success = () => {

  }

  private fail = () => {
    
  }
}

interface SignInProps extends RouteComponentProps {
  requestSignIn: Callback;
}

interface SignInState {
  email: { value: string, valid: boolean }
  password: { value: string, valid: boolean }
}

export { SignIn };