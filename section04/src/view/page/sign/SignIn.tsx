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
import { AuthModelBuilder } from "../../../business/model/AuthModel";
import { Spinner } from "../../../core/component/atom/spinner/Spinner";
import { Center } from "../../../core/component/atom/flex/Center";

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

enum AuthenticationMode {
  SIGN_UP,
  SIGN_IN
}

class SignIn extends Component<SignInProps, SignInState> {

  state: SignInState = {
    form: {
      email: {
        value: "",
        valid: false,
      },
      password: {
        value: "",
        valid: false,
      },
    },
    mode: AuthenticationMode.SIGN_IN,
    loading: false,
    error: {
      message: ""
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
    const keys = Object.keys(this.state.form) as (keyof FormState)[];
    let _submitable = true;
    for (let i = 0; i < keys.length; i++) {
      _submitable = _submitable && this.state.form[keys[i]].valid;
    }
    return _submitable;
  }

  render() {
    const { mode, loading, error } = this.state;
    const { email, password } = this.state.form;
    return (
      <div className={css.signIn}>
        <form onSubmit={this.onSubmit}>
          <FlexView direction={FlexDirection.COLUMN} crossAxisAlignment={CrossAxisAlignment.STRETCH}>
              {
                loading
                ? <Center><Spinner /></Center>
                : <Margin className={css.inputFieldMargin}>
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
                      <Button className={css.switchButton} buttonStyle={{ touchStart: css.touch }} type={ButtonType.BUTTON} onClick={this.switchMode}>
                        { mode === AuthenticationMode.SIGN_IN ? "switch to sign-up" : "switch to sign-in" }
                      </Button>
                    </Padding>
                  </Margin>
              }
              { error.message ? <p className={css.error}>{ error.message }</p> : null }
          </FlexView>
        </form>
      </div>
    );
  }

  private onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state.form;
    const authModel = new AuthModelBuilder().email(email.value).password(password.value).build();
    
    this.loading(true);
    if (this.state.mode === AuthenticationMode.SIGN_UP)
      this.props.requestSignUp(authModel, this.success, this.fail);
    else 
      this.props.requestSignIn(authModel, this.success, this.fail);
  }

  private onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const validationModels = this.validation[name as keyof FormState];
    const updatedState = { [ name ]: { value: value, valid: validate(value, validationModels) } };
    this.setState({ form: { ...this.state.form, ...updatedState } });
  }

  private switchMode = () => {
    this.setState(current => {
      return { mode: current.mode === AuthenticationMode.SIGN_IN ? AuthenticationMode.SIGN_UP : AuthenticationMode.SIGN_IN }
    });
  }

  private getInputState(name: keyof FormState) {
    if (this.state.form[name].valid || this.state.form[name].value === "") {
      return InputStatus.VALID;
    } else {
      return InputStatus.INVALID;
    }
  }

  private success = () => {
    this.loading(false);
    this.props.history.replace("/");
  }

  private fail = (e: any) => {
    this.loading(false);
    this.setState({ error: { message: e.message } });
    console.log(e);
  }

  private loading = (show: boolean) => this.setState({ loading: show });
}

interface SignInProps extends RouteComponentProps {
  requestSignIn: Callback;
  requestSignUp: Callback;
}

interface SignInState {
  form: FormState;
  mode: AuthenticationMode;
  loading: boolean;
  error: {
    message: string;
  }
}

interface FormState {
  email: { value: string, valid: boolean };
  password: { value: string, valid: boolean };
}

export { SignIn };