import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart: React.FC = () => {
  const option = {
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ['product', '2015', '2016', '2017'],
      source: [
        { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
        { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
        { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
        { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [
      {
        type: 'bar',
        itemStyle: {
          borderRadius: [10, 10, 0, 0], // [top-left, top-right, bottom-right, bottom-left]
        }
      },
      {
        type: 'bar',
        itemStyle: {
          borderRadius: [10, 10, 0, 0], // Same for the second series
        }
      },
      {
        type: 'bar',
        itemStyle: {
          borderRadius: [10, 10, 0, 0], // Same for the third series
        
        }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '350px', width: '170%', backgroundColor:'white',borderRadius:"30px"  }} />;
};

export default BarChart;
