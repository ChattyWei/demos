'use strict';

import _ from 'lodash';
var actions = require('../../actions/global.js');

module.exports = function (state = {}, action = {}) {

    if (action.type === actions.SET_VARS) {

        return _.assign({}, state, _.zipObject([action.key], [action.value]));

    }

    return state;

};
