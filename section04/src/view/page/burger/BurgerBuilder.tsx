import React, { Fragment, FC } from "react";
import { BurgerWithStore } from "../../containers/burger/BurgerWithStore";
import { BuildControlsWithStore } from "../../containers/burger/BuildControlsWithStore";
import { RouteComponentProps } from "react-router-dom";
import { dispatch } from "../../../core/store/Store";
import { ModalPayload } from "../../../core/store/action/payload/UIPayload";
import { PurchaseSummaryWithStore } from "../../containers/burger/PurchaseSummaryWithStore";
import { UIActionBuilder } from "../../../core/store/action/builder/UIActionBuilder";

const BurgerBuilder: FC<RouteComponentProps> = (props) => {

  const onConfirm = () => {
    props.history.push("/checkout");
  }

  const onPurchase = () => {
    const payload: ModalPayload = <PurchaseSummaryWithStore onConfirm={onConfirm} />;
    dispatch(UIActionBuilder.showModal(payload));
  }

  return (
    <Fragment>
      <BurgerWithStore />
      <BuildControlsWithStore onPurchase={onPurchase} />
    </Fragment>
  );
}

export { BurgerBuilder };