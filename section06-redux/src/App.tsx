import React, { FC } from 'react';
import css from "./App.module.css";
import { ConnectedCounter } from './containers/Counter/Counter';


const App: FC = () => {
  return (
    <div className={css.App}>
      <ConnectedCounter />
    </div>
  );
}

export default App;

