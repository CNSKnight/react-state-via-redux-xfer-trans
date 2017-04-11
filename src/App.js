import React from 'react';
import { combineReducers } from 'redux';

import XferForm from './transfer/XferForm';
import xferQueue from './transfer/reducer';
import TransHistory from './transactionsHistory/TransHistory';
import transHistory from './transactionsHistory/reducer';

// import './App.css';

const appReducers = combineReducers({ xferQueue, transHistory })

const logo = 'logo.jpg';

const App = props => {
  return (
    <div className="App">
      <header>
        <div className="container">
          <i className="icon"></i>
          <img className="appLogo" src={logo} alt="Peachtree Bank" />
        </div>
      </header>
      <main>
        <div className="container">
          <XferForm />
          <TransHistory />
        </div>
      </main>
    </div>
  );
};

export { appReducers };
export default App;
