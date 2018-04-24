import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import reducers from './reducer/reducer';
import dataService from './api/dataService';

//let store = createStore(reducers);
//console.log("store",createStore(reducers));
let store = createStore(reducers,applyMiddleware(dataService));
console.log("store ---",store);
ReactDOM.render(
    <Provider store = {store}>
           <App/>
    </Provider>, document.getElementById('root'));

