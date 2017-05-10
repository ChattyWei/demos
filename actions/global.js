/**
 * Created by W on 2017/3/1.
 */

var SET_VARS = exports.SET_VARS = 'SET_VARS';

exports.setVars = function (key, value) {
    return {
        type: SET_VARS,
        key,
        value
    };
};

export const ActionChangeRoute = Symbol('change route');
export function changeRoute(route) {

    return {
        type: ActionChangeRoute,
        route
    };

}
