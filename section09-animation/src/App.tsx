import React, { FC, useState } from 'react';
import css from './App.module.css';
import { Modal } from './components/modal/Modal';
import { Backdrop } from './components/backdrop/Backdrop';
import { List } from './components/list/List';

const App: FC = () => {
  const [ state, setState ] = useState<AppState>({ show: false });

  return (
    <div className={css.app}>
      <h1>React Animations</h1>
      <Modal show={state.show} close={() => setState({ show: false })} />
      <Backdrop show={state.show} />
      <button className="button" onClick={() => setState({ show: true })}>Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  )
}

interface AppState {
  show: boolean;
}

export default App;
