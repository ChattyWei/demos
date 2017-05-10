/**
 * Created by weijiahui on 2017/5/10.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ContainerComponent from '../common/ContainerComponent.jsx'
import DecoratorAndAdapter  from './decoratorAndAdapter.jsx';
import _ from 'lodash';
//适配器
const adapter = {
    id: '001',
    name: '默认名称',
    color: 'yellow',
    height: '100',
    width: '100'
}

class Component extends ContainerComponent {

    constructor(props) {

        super(props);

    }

    render() {

        return (
            <DecoratorAndAdapter {...this.props}/>
        );

    }
}

const mapStateToProps = (state) => {

    return {}

};

const mapDispatchToProps = (dispatch) => {

    return {

        init: () => {
        },
        btnClick: () => {
            let content = document.getElementById('name_txt').value;
            doSomeThing({name: content});
            decorator('A', () => {
                /*  setTimeout(() => {
                 alert('再见');
                 }, 5000);*/
            });
        },
    }
    function doSomeThing(dataObj) {
//        适配器
        let tmp_adapter = _.cloneDeep(adapter);
        for (var i in adapter) {
            tmp_adapter[i] = dataObj[i] || adapter[i];
        }

        let newNode = document.createElement('p');
        newNode.innerHTML = '名称： ' + tmp_adapter.name;
        let nameInput = document.getElementById('name_txt');
        nameInput.parentNode.appendChild(newNode);

    }

    //    装饰器好处：需求改动后只要修改decorator函数就行
    function decorator(id, fn) {

        let dom = document.getElementById(id);
        if (typeof dom.onclick === 'function') {
            let oldClickFn = dom.onclick;
            dom.onclick = () => {
                oldClickFn();
                fn();
            }

        } else {
            
            dom.onclick = fn;

        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Component);