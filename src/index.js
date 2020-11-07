import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'mdbreact/dist/css/mdb.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers/reducer';


const logger = store => {
  return next => {
    return action => {
      console.log('[Moddlewara] Dispatching ', action);
      const result = next(action);
      console.log('[Moddlewara] next state ', result.getState());
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

const app = (
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

