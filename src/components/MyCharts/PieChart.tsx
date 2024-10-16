'use client'


import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const PieChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current); // Initialize ECharts

      const option = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            padAngle: 5,
            itemStyle: {
              borderRadius: 10,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
          },
        ],
      };

      myChart.setOption(option); // Set the chart option

      // Cleanup function to dispose the chart instance on component unmount
      return () => {
        myChart.dispose();
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '350px', backgroundColor:'white',  }} />; // Chart container
};

export default PieChart;

