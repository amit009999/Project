import React, { useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

const LosscalculationTrend = ({legend})=>{
    console.log(typeof(Object.keys(legend)))
    const option = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [{name : ['aa']} ]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
      //   series: legend.map((item, index) => ({
      //     name: item,
      //     type: 'line',
      //     stack: 'Total',
      //     // data: data[index] || [] // Use corresponding data from the data prop
      // }))
      };

    return(
        <div>
            <ReactECharts
                option={option}
                style={{ height: 400}}
            />
            <br />
        </div>
    )
}

export default LosscalculationTrend;