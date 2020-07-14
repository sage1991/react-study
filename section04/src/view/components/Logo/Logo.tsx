import React, { FC } from "react";
import BurgerLogoImage from "../../../assets/images/burger-logo.png";
const style = require("./Logo.css");


const Logo:FC = (props) => {
  return (
    <div className={style.Logo}>
      <img src={BurgerLogoImage} alt="burger logo"/>
    </div>
  );
}

export default Logo;