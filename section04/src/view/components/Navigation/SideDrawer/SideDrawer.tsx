import React, { FC, Fragment } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import css from "./SideDrawer.module.css";
import { Visibility } from "../../../../core/code/common/Visibility";
import { Backdrop } from "../../../../core/component/atom/backdrop/Backdrop";
import { LayerLevel } from "../../../../core/code/common/LayerLevel";


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
      <Backdrop clicked={props.closed} level={LayerLevel.SIDE_DRAWER} status={props.show ? Visibility.SHOW : Visibility.HIDE}>
        <div className={classes.join(" ")}>
          <div className={css.Logo}>
            <Logo />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </Backdrop>
    </Fragment>
  );
}

export default SideDrawer;