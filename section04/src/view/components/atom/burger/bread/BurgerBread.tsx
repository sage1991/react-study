import React, { FC } from "react";
import css from "./BurgerBread.module.css";
import { BreadType } from "../../../../../business/code/BreadType";


const BurgerBread: FC<BurgerBreadProps> = (props) => {
  switch (props.type) {
    case BreadType.TOP : 
      return (
        <div className={css.breadTop}>
          <div className={css.seeds1}></div>
          <div className={css.seeds2}></div>
        </div>
      );
    case BreadType.BOTTOM : 
      return <div className={css.breadBottom}></div>;
  }
}


interface BurgerBreadProps {
  type: BreadType;
}


export { BurgerBread };