import React from 'react';
import ReactECharts from 'echarts-for-react';


const HeatmapChart = ()=>{


    // prettier-ignore
const hours = ['INV-01', 'INV-02', 'INV-03', 'INV-04', 'INV-05', 'INV-06', 'INV-07', 'INV-08', 'INV-09', 'INV-10', 'INV-11', 'INV-12', 'INV-13', 'INV-14', 'INV-15', 'INV-16', 'INV-17', 'INV-18', 'INV-19', 'INV-20', 'INV-21', 'INV-22', 'INV-23', 'INV-24', 'INV-25', 'INV-26', 'INV-27', 'INV-28', 'INV-29', 'INV-30']

// prettier-ignore
const days = ['ICR01', 'ICR02', 'ICR03', 'ICR04', 'ICR05', 'ICR06', 'ICR07', 'ICR08', 'ICR09', 'ICR10', 'ICR11', 'ICR12']
const data = [];
// prettier-ignore
for(let i=0;i<=29;i++){
  for(let j=0;j<=11;j++){
    data.push([i,j,10,1])
  }
}

// Function to determine color based on deviation
function getColorForDeviation(deviation) {
  if (deviation < -5) return '#ff0000'; // Red for high negative deviation
  if (deviation > 5) return '#00ff00';  // Green for high positive deviation
  return '#f0c808';                     // Yellow for values between -5 and 5
}


const option = {
  tooltip: {
    position: 'top'
  },
  formatter: function (params) {
      const xValue = params.data[0]; // x-axis value
      const yValue = params.data[1]; // y-axis value
      const Deviation = params.data[2];  // heatmap value
      const Yield  =  params.data[3];
      
      const xLabel = hours[xValue];
      const yLabel = days[yValue];

      return `Block: ${yLabel}<br/>Inverter: ${xLabel}<br/>Deviation: ${Deviation}<br/>Yield: ${Yield}`;
    },
    grid: {
        height: '100%', 
        top: '-1%',
        right: '20%',
        bottom: '20%',
        left: '15%',  // Increased left margin to provide space for y-axis labels
      },
  xAxis: {
    type: 'category',
    data: hours,
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data: days,
    splitArea: {
      show: true
    }
  },
  visualMap: {
  },
  series: [
    {
      name: 'Punch Card',
      type: 'heatmap',
      data: data.map(item => ({
        value: item, // Pass the data array as is
        itemStyle: {
          color: getColorForDeviation(item[2]) // Use custom color function for deviation
        }
      })),
      label: {
        show: true
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

    return(
        <div style={{ height: '400px', overflow: 'auto' }} className='mt-72'>
            <ReactECharts
            option={option}
            style={{ height: '100%' }}
            />
          </div>  
    
    )
}

export default HeatmapChart;