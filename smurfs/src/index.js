import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {Provider} from "react-redux"
import logger from 'redux-logger'
import {createStore,applyMiddleware} from 'redux'
// import thunk from "redux-thunk"

ReactDOM.render(<App />, document.getElementById("root"));
