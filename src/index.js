import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import './index.css';
import App from './App';
import reducers from './reducer/reducer'

let store = createStore(reducers);
console.log("store",createStore(reducers));
ReactDOM.render(
    <Provider store = {store}>
           <App/>
    </Provider>, document.getElementById('root'));

