import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { AppWithStore } from "./view/containers/common/AppWithStore";
import { Provider } from 'react-redux';
import { store } from './core/store/Store';

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppWithStore />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
