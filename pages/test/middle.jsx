import React from 'react';
import {connect} from 'react-redux';
import ContainerComponent from '../common/ContainerComponent.jsx';
import InnerContainer from './inner.jsx';
var actions = require('../../actions/global.js');

class MiddleContainer extends ContainerComponent{
    render() {
    let {submitInfo,userName,userSex,userAge}  = this.props;
        return (
        <div>
            <InnerContainer {...this.props}/>
            <button onClick={(e) =>submitInfo(e,userName,userSex,userAge)}>提交</button>
        </div>


        );

    }
}
const mapStateToProps = (state)=>{
    return {
        moduleName: state.common.moduleName,
    };
};
const mapDispatchToProps = (dispatch)=>{
    return {
        init(){
        },
        submitInfo(e,name,sex,age){
            alert('点击了提交按钮');
            dispatch(actions.setVars('userName',name));
            dispatch(actions.setVars('userSex',sex));
            dispatch(actions.setVars('userAge',age));
        }
    };
}
export default  connect(mapStateToProps,mapDispatchToProps)(MiddleContainer);
