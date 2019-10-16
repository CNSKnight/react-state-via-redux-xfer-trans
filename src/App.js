import React from "react";
import { combineReducers } from "redux";

import { ConnectedXferForm, xferQueueReducer } from "./transfer";
import {
  ConnectedTransHistory,
  transHistoryReducer
} from "./transactionsHistory";

const appReducers = combineReducers({ xferQueueReducer, transHistoryReducer });

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="container">
          <span className="logo">
            <span className="flipH">B</span>
            <span>T</span>
            <span>B</span>
          </span>
          <span className="banner">Big Town Bank</span>
        </div>
      </header>
      <main>
        <div className="container">
          <ConnectedXferForm />
          <ConnectedTransHistory />
        </div>
      </main>
    </div>
  );
};

export { App as default, appReducers };
