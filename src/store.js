import {createStore, combineReducers, applyMiddleware} from 'redux';
import mathreducer from './reducers/mathReducer';
import userreducer from './reducers/userReducer';
const mylogger=(store)=>(next)=>(action)=>{
    console.log("Logged",action);
    next(action);
}
const store=createStore(
    combineReducers({
        mathRed:mathreducer,
        userRed:userreducer
    }),
    {},
    applyMiddleware(mylogger)
);

export default store;