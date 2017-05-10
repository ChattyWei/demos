/**
 * Created by W on 2017/2/28.
 * 屏幕自适应
 */
const appRoute = {
    childRoutes: [{
        path: '/',
        getComponents(nextState, callback) {

            require.ensure([], function (require) {

                callback(null, require('./app.jsx').default);

            });

        },
        getIndexRoute(partialNextState, callback) {
            require.ensure([], function (require) {
                callback(null, {
                    component: require('./cssDemo/decoratorAndAdapter_container.jsx').default
                })
            })
        },
        getChildRoutes(partialNextState, callback) {

            require.ensure([], function (require) {

                callback(null, [
                    //    测试用路由
                    require('./test/outer.jsx').default,
                    require('./test/middle.jsx').default,
                    require('./test/inner.jsx').default,
                    require('./charts/column.jsx').default,
                    require('./easyuiDemo.jsx').default,
                    require('./charts/line.jsx').default,
                    require('./ant_design/test.jsx').default,
                    require('./cssDemo/decoratorAndAdapter_container.jsx').default


                ]);

            });

        }
    }]
};
export default appRoute;