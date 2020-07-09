import React, { Fragment, FC, useRef, useEffect, RefObject, useState, Dispatch, SetStateAction } from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import css from "./Modal.module.css";
import { Callback } from "../../../core/common/types/function/Callback";
import { BackdropAndModalStatus } from "../../../core/common/code/BackdropAndModalStatus";


const Modal: FC<ModalProps> = (props) => {

  const [ state, setState ] = useState<ModalState>({ initEvent: false });
  const div = useRef<HTMLDivElement>(null);
  useEAnimationffectHooks(div, props.status, state, setState);
  
  switch (props.status) {
    case BackdropAndModalStatus.HIDE : case BackdropAndModalStatus.SHOW : 
      const classes = [ css.Modal, props.status === BackdropAndModalStatus.SHOW ? css.ShowModal : css.HideModal ].join("  ");
      return (
        <Fragment key={props.status}>
          <Backdrop status={props.status} clicked={props.close} />
          <div ref={div} className={classes}>
            { props.children }
          </div>
        </Fragment>
      );
    case BackdropAndModalStatus.NONE : default : 
      return null;
  }
}


const useEAnimationffectHooks = (div: RefObject<HTMLDivElement>, status: BackdropAndModalStatus, state: ModalState, setState: Dispatch<SetStateAction<ModalState>>) => {
  useEffect(() => {
    if (div.current && !state.initEvent) {
      div.current.addEventListener("animationstart", (e: AnimationEvent) => {
        console.log("animationstart", e.animationName);
        if (e.animationName === css.ShowModalAnimation && div.current) {
          div.current.style.display = "block";
        }
      });
      div.current.addEventListener("animationend", (e: AnimationEvent) => {
        console.log("animationend", e.animationName);
        if (e.animationName === css.HideModalAnimation && div.current) {
          div.current.style.display = "none";
          setState({ initEvent: false });
        }
      });
      setState({ initEvent: true });
    }
  }, [ status ]);
}


interface ModalProps {
  status: BackdropAndModalStatus;
  close: Callback;
}

interface ModalState {
  initEvent: boolean;
}

export { Modal };
