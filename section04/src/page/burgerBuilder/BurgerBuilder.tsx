import React, { Component, Fragment } from "react";
import css from "./BurgerBuilder.module.css";
import { StyleProps } from "../../core/types/interface/StyleProps";
import { Visibility } from "../../core/code/Visibility";
import { Modal } from "../../core/component/molecule/modal/Modal";
import { Button } from "../../core/component/atom/button/Button";
import { Input } from "../../core/component/atom/input/Input";
import { FlexView } from "../../core/component/atom/flex/FlexView";
import { FlexDirection } from "../../core/code/flex/FlexDirection";
import { Expand } from "../../core/component/atom/flex/expand/Expand";
import { FlexWrap } from "../../core/code/flex/FlexWrap";
import { Margin } from "../../core/component/atom/margin/Margin";
import { Padding } from "../../core/component/atom/padding/Padding";
import { CrossAxisAlignment } from "../../core/code/flex/CrossAxisAlignment";
import { MultiLineBehavior } from "../../core/code/flex/MultiLineBehavior";
import { MainAxisAlignment } from "../../core/code/flex/MainAxisAlignment";


class BurgerBuilder extends Component<StyleProps, BurgerBuilderState> {

  state: BurgerBuilderState = {
    modal: {
      status: Visibility.NONE
    }
  }

  render() {
    return (
      <Fragment>
        <Modal 
          status={this.state.modal.status}
          close={this.closeModal}>
          <h1>Hello World!</h1>
        </Modal>
        burger
        BuildControl
        <FlexView 
        style={{height: 100}} 
        direction={FlexDirection.COLUMN} 
        mainAxisAlignment={MainAxisAlignment.SPACE_AROUND}
        crossAxisAlignment={CrossAxisAlignment.FLEX_START} 
        wrap={FlexWrap.MULTI_LINE} 
        multiLineBehavior={MultiLineBehavior.START}>
          <Margin className={css.margin}>
            <Button onClick={this.showModal} className={css.button}>toggle&nbsp;modal</Button>
            <Padding className={css.padding}>
              <Button onClick={this.showModal} className={css.button}>toggle&nbsp;modal</Button>
              <Button onClick={this.showModal} className={css.button}>toggle&nbsp;modal</Button>
            </Padding>
            <Button onClick={this.showModal} className={css.button}>toggle&nbsp;modal</Button>
          </Margin>
          <Expand ratio={2}>
            <Padding padding={10}>
              <Input name="name" onBlur={this.showModal}/>
            </Padding>
          </Expand>
        </FlexView>
      </Fragment>
    );
  }

  private closeModal = () => {
    this.setState({ modal: { status: Visibility.HIDE } });
  }

  private showModal = () => {
    this.setState({ modal: { status: Visibility.SHOW } });
  }
  
}

interface BurgerBuilderState {
  modal: { status: Visibility };
}

export { BurgerBuilder };