import React, { Fragment, PropsWithChildren, FC } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const style = require("./Layout.css");

type LayoutProps = PropsWithChildren<{}>;

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <Fragment>
      <Toolbar></Toolbar>
      <div>toolbar, slideDrawer, backdrop</div>
      <main className={style.content}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
