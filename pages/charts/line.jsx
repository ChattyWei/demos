const React = require('react');
// Note that Highcharts has to be required separately
const ReactHighcharts = require('react-highcharts');
const ReactDOM = require('react-dom');

const config = {
    title: {
        text: '不同城市的月平均气温',
        x: -20
    },
    subtitle: {
        text: '数据来源: WorldClimate.com',
        x: -20
    },
    xAxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12],
        /*labels:{
            step:5
        }*/

    },
    yAxis: {
        title: {
            text: '温度 (°C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    //设置滚动条
    scrollbar: {
        enabled: true
    },
    series: [{
        name: '东京',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: '纽约',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
        name: '柏林',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
        name: '伦敦',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
};
const afterRender = (chart) => { /* do stuff with the chart  */
 alert('do stuff with the char ');
};

const Component = (()=>{
    return (
        <ReactHighcharts config={config}/>
    );
});

export default Component;
