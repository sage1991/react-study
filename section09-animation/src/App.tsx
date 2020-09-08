import React, { FC, useState } from 'react';
import css from './App.module.css';
import { Modal } from './components/modal/Modal';
import { Backdrop } from './components/backdrop/Backdrop';
import { List } from './components/list/List';
import Transition from "react-transition-group/Transition";

const App: FC = () => {
  const [ state, setState ] = useState<AppState>({ show: false, showBlock: false });

  return (
    <div className={css.app}>
      <h1>React Animations</h1>
      <div>
        <button className="button" onClick={() => setState({ ...state, showBlock: !state.showBlock })}>
          toggle
        </button>
      </div>
      
      <Transition 
        in={state.showBlock} 
        timeout={300}
        mountOnEnter
        unmountOnExit>
        { 
          state => (
            <div style={{ 
              backgroundColor: "red", 
              width: 100, 
              height: 100, 
              margin: "auto", 
              transition: "opacity 1s ease-out",
              opacity: state === "exiting" ? 0 : 1,
            }} />
          )
        }
      </Transition>
      <Transition 
        in={state.show} 
        timeout={300} 
        mountOnEnter
        unmountOnExit>
        {
          transition => (<Modal show={transition} close={() => setState({ ...state, show: false })} />)
        }
      </Transition>
      
      <Backdrop show={state.show} />
      <button className="button" onClick={() => setState({ ...state, show: true })}>Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  )
}

interface AppState {
  show: boolean;
  showBlock: boolean;
}

export default App;
