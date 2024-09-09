import React, { useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import LossCalSearchbar from '../components/LossCalSearchbar';
echarts.registerTheme('my_theme', {
  backgroundColor: '#f4cccc'
});
echarts.registerTheme('another_theme', {
  backgroundColor: '#eee'
});

const LosscalculationChart = () => {
    const colors = [
        '#ff9999', '#66b3ff', '#99ff99', '#ffcc99',
        '#c2c2f0', '#ffb3e6', '#c2f0c2', '#ff6666',
        '#c2c2c2', '#ffb366', '#d9d9d9'
    ];
    const option = {
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          },
          formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + 'value: ' + tar.value;
          }
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '10%', // Increase bottom margin
            top: '5%',     // Optional: Increase top margin
            containLabel: true
        },
        xAxis: {
            type: 'category',
            splitLine: { show: false },
            data: [
              'Actual Generation', 'Outage Loss', 'Degradation Loss', 'Temperature Loss', 
              'Clipping Loss', 'Inverter Efficiency Loss', 'Array Mismatch Loss', 
              'DC line Loss', 'Actual Array Loss', 'Total Loss', 'Potential Generation'
            ],
            axisLabel: {
              interval: 0, // Ensure all labels are displayed
              fontSize: 12, // Adjust font size to fit labels
              margin: 8, // Adjust margin between labels and axis
              formatter: function(value) {
                // Wrap text manually if needed
                const maxLength = 10; // Maximum characters per line
                let result = '';
                while (value.length > maxLength) {
                  result += value.substring(0, maxLength) + '\n';
                  value = value.substring(maxLength);
                }
                result += value;
                return result;
              }
            },
            axisTick: {
              alignWithLabel: true // Ensure ticks are aligned with labels
            },
            boundaryGap: true // Adds space at the beginning and end of the axis
          },
          
          
        yAxis: {
          type: 'value',
          type: 'value',
          name:'kWh',
          nameLocation: 'middle',  // Center the name vertically
          nameRotate: 90,          // Rotate the name to be vertical
          nameTextStyle: {
          padding: [0, 0, 30, 0], // Adjust padding if needed
          fontSize: 14,          // Set font size
          fontWeight: 'bold',
          }
        },
        series: [
          {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            },
            emphasis: {
              itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
              }
            },
            data: [0, 2900, 2900+1200, 1200, 300, 0,0,0,0,0,0]
          },
          {
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            itemStyle: {
                // Apply different colors to each bar
                color: function(params) {
                  return colors[params.dataIndex];
                }
              },
            data: [2900, 1200, 300, 200, 900, 300,9,9,9,9,9]
          }
        ]
  };


  return (
    <div>
        <ReactECharts
          option={option}
          style={{ height: 400}}
        />
        <br />
    </div>
  );
};

export default LosscalculationChart;
