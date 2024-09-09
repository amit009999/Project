import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

const PowerIrradiationTrend = () => {
  let data = [
    {"time": "00:00", "value": 10},
    {"time": "00:02", "value": 10},
    {"time": "00:04", "value": 10},
    {"time": "00:06", "value": 10},
    {"time": "01:00", "value": 15},
    {"time": "02:00", "value": 8},
    {"time": "03:00", "value": 12},
    {"time": "04:00", "value": 7},
    {"time": "05:00", "value": 14},
    {"time": "06:00", "value": 9},
    {"time": "07:00", "value": 20},
    {"time": "08:00", "value": 13},
    {"time": "09:00", "value": 18},
    {"time": "10:00", "value": 11},
    {"time": "11:00", "value": 16},
    {"time": "12:00", "value": 22}
]

let formattedData = data.map(item => {
  let date = new Date(`2024-08-30T${item.time}:00`); // Combine with a reference date
  let timeOnly = date.toTimeString().split(' ')[0].slice(0, 5); // Extract "HH:MM" part
  return [timeOnly, item.value];
});
  const option = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    title: {
      left: 'center',
      text: 'Large Ara Chart'
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 20
      },
      {
        start: 0,
        end: 20
      }
    ],
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        smooth: true,
        symbol: 'none',
        areaStyle: {},
        data: formattedData
      }
    ]
  };


  return(
    <div className='transition-all duration-300'>
      
      <ReactECharts
          option={option}
          style={{ height: 400}}
        />
        <br />
    </div>
  )

};


export default PowerIrradiationTrend;