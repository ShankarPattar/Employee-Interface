import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import './css/index.css';
import App from './App';
import reducer from './reducer/Reducer';
import service from './apiservice/Service';

let store = createStore(reducer,applyMiddleware(service));
ReactDOM.render(
    <Provider store = {store}>
           <App/>
    </Provider>,
    document.getElementById('root')
);

