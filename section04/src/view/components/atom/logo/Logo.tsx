import React, { FC } from "react";
import BurgerLogoImage from "../../../../assets/images/burger-logo.png";
import css from "./Logo.module.css";

const Logo: FC = () => {
  return (
    <div className={css.Logo}>
      <img src={BurgerLogoImage} alt="burger logo"/>
    </div>
  );
}

export default Logo;