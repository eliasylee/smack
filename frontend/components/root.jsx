import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './router/router';

const Root = ({ store }) => (
  <Provider store={store}>
    <AppRouter store={store} />
  </Provider>
);

export default Root;
