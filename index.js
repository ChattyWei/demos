/**
 * Created by W on 2017/2/28.
 */

import React from "react";
import ReactDOM  from "react-dom";
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import store from './model/store.js';
import appRoute from './pages/route.js';


ReactDOM.render((
    <Provider store={store}>
          <Router history={browserHistory} routes={appRoute}>

          </Router>
    </Provider>

),document.getElementById('app'));