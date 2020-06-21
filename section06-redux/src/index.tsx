import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { counterStore } from './core/store/Store';


const CounterApplication = (
  <React.StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(CounterApplication, document.getElementById('root'));
serviceWorker.unregister();
