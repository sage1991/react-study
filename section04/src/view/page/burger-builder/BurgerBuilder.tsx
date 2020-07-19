import React, { Fragment, FC } from "react";
import { BurgerWithStore } from "../../containers/burger/BurgerWithStore";
import { BuildControlsWithStore } from "../../containers/burger/BuildControlsWithStore";

const BurgerBuilder: FC = () => {
  return (
    <Fragment>
      <BurgerWithStore />
      <BuildControlsWithStore />
    </Fragment>
  );
}

export { BurgerBuilder };