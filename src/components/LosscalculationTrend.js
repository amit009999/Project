import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
let data = [];
function generateLast7DaysData() {
 
  
  for (let i = 7; i > 0; i--) {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - i); // Subtract days to get past dates

    // Format the date to YYYY-MM-DD
    let formattedDate = currentDate.toISOString().split('T')[0];

    // Generate random values for val1 and val2
    let val1 = Math.floor(Math.random() * 100); // Example random value for val1
    let val2 = Math.floor(Math.random() * 100); // Example random value for val2

    // Add the generated data to the array
    data.push({
      date: formattedDate,
      val1: val1,
      val2: val2
    });
  }
  
  return data;
}

const LosscalculationTrend = ({legend})=>{
  const [xAxisvalue,setxAxisValue] = useState([])
  //console.log("xAxisvalue",xAxisvalue)
    const option = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legend
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
          data: xAxisvalue
        },
        yAxis: {
          type: 'value'
        },
      //   series: legend.map((item,index) => ({
      //     name: item,
      //     type: 'line',
      //     stack: 'Total',
      //     data: data
      // }))
      };

      useEffect(()=>{
       const x= generateLast7DaysData();
       console.log("x",x)
       const datevalue = x.map((item)=>{
        return item.date;
       })
       setxAxisValue(datevalue);
      },[])
     
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


//foloow the below dataformat for data 
// const seriesNames = ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'];
// const seriesData = [
//   [120, 132, 101, 134, 90, 230, 210],
//   [220, 182, 191, 234, 290, 330, 310],
//   [150, 232, 201, 154, 190, 330, 410],
//   [320, 332, 301, 334, 390, 330, 320],
//   [820, 932, 901, 934, 1290, 1330, 1320]
// ];

// const series = seriesNames.map((name, index) => ({
//   name: name,
//   type: 'line',
//   stack: 'Total',
//   data: seriesData[index]
// }));

// console.log(series);