import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./index.css";

import {Provider} from 'react-redux'
import reducers, {initialState} from './reducers';
import {createStore} from 'redux';

const store = createStore(reducers);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
