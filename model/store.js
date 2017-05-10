/**
 * Created by W on 2017/2/28.
 */
import {combineReducers,createStore,applyMiddleware}  from 'redux';
import  thunkMiddleware from 'redux-thunk';
import common from './common/combine.js';
import vars from './global/vars.js';

const  reducer = combineReducers({
    common,
    vars
});
const store = reducer({},{});
export default createStore(reducer,store,applyMiddleware(thunkMiddleware));