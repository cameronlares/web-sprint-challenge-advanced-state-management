import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {Provider} from "react-redux"
import logger from 'redux-logger'
import {createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk"

import {reducer} from "./reducers/reducer"
// const store = createStore(reducer, applyMiddleware(thunk));
const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(
    <React.StrictMode>
      <Provider store = {store}>
      <App />
      </Provider>
    
    </React.StrictMode>,
    document.getElementById('root')
  );


