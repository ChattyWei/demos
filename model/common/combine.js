/**
 * Created by W on 2017/2/28.
 */
import {combineReducers} from 'redux';
import _ from 'lodash';
import * as reducers from './reducer.js';

export default combineReducers(_.assign(reducers));