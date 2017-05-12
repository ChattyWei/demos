/**
 * Created by weijiahui on 2017/5/12.
 * 8个常用方法的demo
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ContainerComponent from '../common/ContainerComponent.jsx'
import _ from 'underscore';

class Component extends ContainerComponent {

    constructor(props) {

        super(props);

    }

    render() {

        return (
            <div>
                hello world
            </div>
        );

    }

}

const mapStateToProps = (state) => {

    return {}

};

const mapDispatchToProps = (state) => {
    return {

        init: () => {

            let arr = ['name', 'sex'];
            let obj = {
                name: 'qianlongo',
                sex: 'boy'
            };
            let arr2 = [-1, -3, -6, 0, 3, 6, 9];

            //underscore中map的用法
            /*   _.map(obj, (val, key, obj) => {

             debugger;
             console.log(obj[key]);

             })*/

            //    underscore中every的用法
            /*_.every(arr,(val,key,arr)=>{
             console.log(val,key,arr);
             return val === 'name';
             });*/

            //underscore中find的用法
            /*_.find(obj, (val, key) => {

             if (key === 'sex') {
             alert(val);
             return val;
             }

             });*/

            //    underscore中filter用法
            let result = _.filter(arr2, (val, key, arr2) => {

                return val > 0;

            });


            console.log(result);

        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);



