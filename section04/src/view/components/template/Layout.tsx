import css from "./Layout.module.css";
import React, { Fragment, FC } from "react";
import { StyleProps } from "../../../core/types/interface/StyleProps";
import { UIContainer } from "../../../core/container/ui/UIContainer";
import { ToolbarWithStore } from "../../containers/common/ToolbarWithStore";


const Layout: FC<StyleProps> = (props) => {
  return (
    <Fragment>
      <ToolbarWithStore />
      <UIContainer />
      <main className={css.content}>
        { props.children }
      </main>
    </Fragment>
  );
}

export { Layout };