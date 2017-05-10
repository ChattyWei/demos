import React from 'react';
import {connect} from 'react-redux';

let EasyuiContainer = React.createClass({

    render (){
       return (
           <table>
               <tr>
                   <td>11</td>
                   <td>22</td>
                   <td>33</td>
               </tr>
           </table>
       );
    }
});

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

export default  connect(mapStateToProps,mapDispatchToProps)(EasyuiContainer);