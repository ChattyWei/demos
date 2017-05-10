import React from 'react';
import {connect} from 'react-redux';
import ReactHighcharts from 'react-highcharts';
import test from 'highcharts';

// class ColumnContainer extends ContainerComponent{
    let ColumnContainer  = React.createClass({
    render(){
        let config = {
            chart:{
                plotBackgroundColor:null,
                plotBorderWidth:null,
                plotShadow:false
            },
            title:{
                text:'测试饼状图'
            },
            tooltip:{
                pointFormat:'{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions:{
                pie:{
                    allowPointSelect:true,
                    cursor:'point',
                    dataLabels:{
                        enabled:true,
                        format:'<b>{point.name}</b>:{point.percentage:.1f}%'
                    },
                    showInLegend:true
                }
            },
            series:[{
                type:'pie',
                name:'Browser share',
                data:[
                    // ['Firefox', 45.0],
                    // ['IE', 26.8],
                    {
                        name:'Chrome',
                        y:12.8,
                        sliced:true,
                        selected:true
                    },
                    ['Safari', 8.5],
                    ['Opera', 6.2],
                    ['Others', 0.7]
                ]
            }]
        };
        return (
            <ReactHighcharts config={config}/>
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