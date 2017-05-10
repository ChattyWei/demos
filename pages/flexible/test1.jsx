import React from 'react';
import {connect} from 'react-redux';
import ContainerComponent from '../common/ContainerComponent.jsx';
import styles from './test1.scss';

class TestComponent extends ContainerComponent{
    render (){
        return (
            <div className={styles.f_box}><p>hello world</p></div>
        );
    }
};

const mapStateToProps = (state)=>{
    return {
        moduleName: state.common.moduleName,
        userName: state.vars.userName,
        userSex: state.vars.userSex,
        userAge: state.vars.userAge
    };
};
const mapDispatchToProps = (dispatch)=>{
    return {
        init(){
        },
        changeName(e){
            dispatch(actions.setVars('userName',e.target.value));
        },
        changeState(e,key){
            dispatch(actions.setVars(key,e.target.value));
        }
    };
}
export default  connect(mapStateToProps,mapDispatchToProps)(TestComponent);


