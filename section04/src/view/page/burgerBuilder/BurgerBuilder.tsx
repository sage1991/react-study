import React, { Component, Fragment, ReactNode } from "react";
import css from "./BurgerBuilder.module.css";
import { StyleProps } from "../../../core/types/interface/StyleProps";
import { Visibility } from "../../../core/code/common/Visibility";
import { Button } from "../../../core/component/atom/button/Button";
import { FlexView } from "../../../core/component/atom/flex/FlexView";
import { FlexDirection } from "../../../core/code/flex/FlexDirection";
import { FlexWrap } from "../../../core/code/flex/FlexWrap";
import { Margin } from "../../../core/component/atom/margin/Margin";
import { Padding } from "../../../core/component/atom/padding/Padding";
import { CrossAxisAlignment } from "../../../core/code/flex/CrossAxisAlignment";
import { MultiLineBehavior } from "../../../core/code/flex/MultiLineBehavior";
import { MainAxisAlignment } from "../../../core/code/flex/MainAxisAlignment";
import { Label } from "../../../core/component/atom/label/Label";
import { Popup } from "../../../core/component/molecule/popup/Popup";
import { UIContainer } from "../../../core/container/ui/UIContainer";
import { dispatch } from "../../../core/store/Store";
import { UIAction } from "../../../core/store/action/actionType/UIAction";
import { Toast } from "../../../core/component/atom/toast/Toast";


class BurgerBuilder extends Component<StyleProps, BurgerBuilderState> {

  state: BurgerBuilderState = {
    modal: {
      status: Visibility.NONE
    },
    snackbar: {
      status: Visibility.NONE
    },
    popup: {
      children: []
    }
  }

  render() {
    return (
      <Fragment>
        burger

        BuildControl
        
        <FlexView direction={FlexDirection.COLUMN} 
                  mainAxisAlignment={MainAxisAlignment.SPACE_AROUND}
                  crossAxisAlignment={CrossAxisAlignment.STRETCH} 
                  wrap={FlexWrap.SINGLE_LINE} 
                  multiLineBehavior={MultiLineBehavior.START}>
          <Margin className={css.margin}>
            <Padding className={css.padding}>
              <Button onClick={this.showModal} className={css.button}>toggle modal</Button>
              <Button onClick={this.showSnackbar} className={css.button}>toggle snackbar</Button>
              <Button onClick={this.addPopup} className={css.button}>add popup</Button>
            </Padding>
          </Margin>
        </FlexView>
        <Toast status={Visibility.SHOW}>hello!</Toast>
        <UIContainer />
      </Fragment>
    );
  }

  private showModal = () => {
    dispatch({ type: UIAction.SHOW_MODAL, payload: (
      <Fragment>
        <h1>Hello World!</h1>
        <Label required={true}>your name</Label>
        <Label>your name</Label>
      </Fragment>
    )});
  }

  private showSnackbar = () => {
    dispatch({ type: UIAction.SHOW_SNACKBAR, payload: { message: "hello snackbar!!", button: "확인", onClick: () => { alert("close!") } } });
  }
  
  private hideSnackbar = () => {
    this.setState({ snackbar: { status: Visibility.HIDE } });
  }

  private addPopup = () => {
    const id = Date.now();
    dispatch({ type: UIAction.ADD_POPUP, payload: { id: id, node: <Popup key={id} id={id}><div>hello!! this is popup!!</div></Popup> } });
  }

}

interface BurgerBuilderState {
  modal: { status: Visibility };
  snackbar: { status: Visibility };
  popup: { children: ReactNode[] };
}

export { BurgerBuilder };