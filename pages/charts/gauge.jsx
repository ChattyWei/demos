
import React from 'react';
import {connect} from 'react-redux';
import ReactHighcharts from 'react-highcharts';
var HighchartsMore = require('highcharts-more');
HighchartsMore(ReactHighcharts.Highcharts);
var HighchartsExporting = require('highcharts-exporting');
HighchartsExporting(ReactHighcharts.Highcharts);

let GaugeContainer =  React.createClass({
    render(){
        let json = {
            chart : {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            credits:{
                enabled: false
            },
            title:{
                text: '双轴车速表'
            },
            pane:{
                startAngle: -150,
                endAngle: 150
            },
            yAxis:[
                {
                    min: 0,
                    max: 200,
                    lineColor: '#339',
                    tickColor: '#339',
                    minorTickColor: '#339',
                    offset: -25,
                    lineWidth: 2,
                    labels: {
                        distance: -20,
                        rotation: 'auto'
                    },
                    tickLength: 5,
                    minorTickLength: 5,
                    endOnTick: false
                }, {
                    min: 0,
                    max: 124,
                    tickPosition: 'outside',
                    lineColor: '#933',
                    lineWidth: 2,
                    minorTickPosition: 'outside',
                    tickColor: '#933',
                    minorTickColor: '#933',
                    tickLength: 5,
                    minorTickLength: 5,
                    labels: {
                        distance: 12,
                        rotation: 'auto'
                    },
                    offset: -20,
                    endOnTick: false
                }],
            series:[{
                name: 'Speed',
                data: [80],
                dataLabels: {
                    formatter: function () {
                        var kmh = this.y,
                            mph = Math.round(kmh * 0.621);
                        return '<span style="color:#339">' + kmh + ' km/h</span><br/>' +
                            '<span style="color:#933">' + mph + ' mph</span>';
                    },
                    backgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#DDD'],
                            [1, '#FFF']
                        ]
                    }
                },
                tooltip: {
                    valueSuffix: ' km/h'
                }
            }]
        };
        return (
            <ReactHighcharts config = {json}></ReactHighcharts>
        )
    }
});

const mapStateToProps = (state)=>{
    return {
        moduleName: state.common.moduleName
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        init(){
            debugger;
            alert('hello world');
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(GaugeContainer);


