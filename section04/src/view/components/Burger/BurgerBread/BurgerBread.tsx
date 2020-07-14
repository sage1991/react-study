import React, { FC } from "react";
import { BreadType } from "../../../../business/code/BreadType";
import css from "./BurgerBread.module.css";

const BurgerBread: FC<BurgerBreadProps> = (props) => {
  switch (props.type) {
    case BreadType.TOP : 
      return (
        <div className={css.BreadTop}>
          <div className={css.Seeds1}></div>
          <div className={css.Seeds2}></div>
        </div>
      );
    case BreadType.BOTTOM :
      return (
        <div className={css.BreadBottom}></div>
      );
  }
}

interface BurgerBreadProps {
  type: BreadType;
}

export { BurgerBread };