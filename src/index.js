import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
//import logger from 'redux-logger';
import store from './store';

/* store.subscribe(()=>{
    console.log("Updated", store.getState());
}) */
/* 
store.dispatch({
    type:"ADD",
    payload:10
});

store.dispatch({
    type:"SUB",
    payload:5
});

store.dispatch({
    type:"SET_NAME",
    payload:"Raj"
});

store.dispatch({
    type:"SET_AGE",
    payload:31
}); */

ReactDOM.render(
    <Provider store={store} >
    <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
