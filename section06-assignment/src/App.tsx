import React, { FC } from 'react';
import { ConnectedPeople } from './containers/ConnectedPeople';
import { Provider } from 'react-redux';
import { personStore } from './core/store/Store';

const App: FC = () => (
  <Provider store={personStore}>
    <ConnectedPeople />
  </Provider>
  
);
export { App };
