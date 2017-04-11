import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'

import App, { appReducers } from './App';
import './index.css';

const store = createStore(appReducers, undefined, autoRehydrate({ log: true }));

persistStore(store); //.purge();

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,

  document.getElementById('root')
);
