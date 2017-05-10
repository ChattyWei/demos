import React from 'react';
import {connect} from 'react-redux';
import ContainerComponent from '../common/ContainerComponent.jsx';
var actions = require('../../actions/global.js');

class InnerContainer extends ContainerComponent{
    render() {
        let {changeName,userName,userSex,userAge,changeState}  = this.props;
        return (
            <div><form>
                <input  placeholder="请输入姓名" value={userName} style={{display:'block'}} onChange={(e)=>changeName(e)} type="text"/>
                <select value={userSex} style={{display:'block'}} onChange={(e)=>changeState(e,'userSex')}>
                    <option>male</option>
                    <option>female</option>
                </select >
                <input placeholder="请输入年龄" style={{display:'block'}} type="text" value={userAge} onChange={(e)=>changeState(e,'userAge')}/>
            </form></div>
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
        },
        changeName(e){
            dispatch(actions.setVars('userName',e.target.value));
        },
        changeState(e,key){
            dispatch(actions.setVars(key,e.target.value));
        }
    };
}
export default  connect(mapStateToProps,mapDispatchToProps)(InnerContainer);
