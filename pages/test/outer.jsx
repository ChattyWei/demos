import React ,{PropTypes}from 'react';
import {connect} from 'react-redux';
import Middle from './middle.jsx';
import ContainerComponent from '../common/ContainerComponent.jsx';
var actions = require('../../actions/global.js');

class OuterContainer extends ContainerComponent{

    render() {
        let {userName,userSex,userAge} = this.props;
            return (
            <div>
                <Middle {...this.props}/>
                <div className="outer_box">my name is {userName},i am {userSex} and {userAge} years old...</div>
            </div>
            );

        }
    }
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
            dispatch(actions.setVars('userName','Chatty'));
            dispatch(actions.setVars('userSex','female'));
            dispatch(actions.setVars('userAge','25'));
            }
        };
    }

export default  connect(mapStateToProps,mapDispatchToProps)(OuterContainer);
