import React from 'react';
import {connect} from 'react-redux';
import { DatePicker, message,Modal, Button,Input,Pagination  } from 'antd';

// class ColumnContainer extends ContainerComponent{
let ColumnContainer  = React.createClass({
    render(){
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        )
    }
})

const mapStateToProps = (state)=>{
    return {
        moduleName: state.common.moduleName
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        init(){}
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(ColumnContainer);