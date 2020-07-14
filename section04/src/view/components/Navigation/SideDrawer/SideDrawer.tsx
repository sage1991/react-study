import React, { FC, Fragment } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import css from "./SideDrawer.module.css";
import { Backdrop } from "../../UI/Backdrop/Backdrop";
import { Visibility } from "../../../../core/code/common/Visibility";


interface SideDrawerProps {
  closed : () => void;
  opened : () => void;
  show : boolean;
}


const SideDrawer:FC<SideDrawerProps> = (props) => {
  
  let classes = [css.SideDrawer];
  if(props.show) {
    classes.push(css.Open);
  } else {
    classes.push(css.Close);
  }
  
  return (
    <Fragment>
      <Backdrop 
        status={Visibility.NONE} 
        clicked={props.closed} />
      <div className={classes.join(" ")}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
}

export default SideDrawer;