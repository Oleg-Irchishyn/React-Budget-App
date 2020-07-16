import store from "./redux/store"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();