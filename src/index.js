import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from './scripts/store';
import { Provider } from 'react-redux'
console.log(store);
ReactDOM.render( <
    Provider store = { store } >
    <
    App / > < /Provider > , document.getElementById("root")
);