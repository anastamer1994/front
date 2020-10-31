import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'mdbreact/dist/css/mdb.css';
import Provider from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);


const app = (
  <Provider store= {store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

