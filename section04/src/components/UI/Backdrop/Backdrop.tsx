import React, { FC, RefObject, useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import css from "./Backdrop.module.css";
import { Callback } from "../../../core/common/types/function/Callback";
import { BackdropAndModalStatus } from "../../../core/common/code/BackdropAndModalStatus";


const Backdrop: FC<BackdropProps> = (props: BackdropProps) => {
  
  const [ state, setState ] = useState<BackdropState>({ initEvent: false });
  const div = useRef<HTMLDivElement>(null);
  useAnimationEffectHooks(div, props.status, state, setState);
  switch (props.status) {
    case BackdropAndModalStatus.HIDE : case BackdropAndModalStatus.SHOW :
      const classes = [ css.Backdrop, props.status === BackdropAndModalStatus.SHOW ? css.ShowBackdrop : css.HideBackdrop ].join(" ");
      return <div ref={div} className={classes} onClick={props.clicked}></div>;
    case BackdropAndModalStatus.NONE : default :
      return null;
  }
};


const useAnimationEffectHooks = (div: RefObject<HTMLDivElement>, status: BackdropAndModalStatus, state: BackdropState, setState: Dispatch<SetStateAction<BackdropState>>) => {
  useEffect(() => {
    if (div.current && !state.initEvent) {
      div.current.addEventListener("animationstart", (e: AnimationEvent) => {
        if (e.animationName === css.ShowBackdropAnimation && div.current) {
          div.current.style.display = "block";
        }
      });
      div.current.addEventListener("animationend", (e: AnimationEvent) => {
        if (e.animationName === css.HideBackdropAnimation && div.current) {
          div.current.style.display = "none";
        }
      });
      setState({ initEvent: true });
    }
  }, [ status ]);
}


interface BackdropProps {
  status: BackdropAndModalStatus;
  clicked : Callback;
}

interface BackdropState {
  initEvent: boolean;
}


export { Backdrop };
