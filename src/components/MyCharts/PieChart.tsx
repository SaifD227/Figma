'use client'


import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const PieChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null); // Reference for the chart container

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


// 'use client';

// import React, { useEffect, useRef } from 'react';
// import * as am5 from "@amcharts/amcharts5";
// import * as am5percent from "@amcharts/amcharts5/percent";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// const PieChart: React.FC = () => {
//   const chartRef = useRef<HTMLDivElement | null>(null); // Reference for the chart container

//   useEffect(() => {
//     if (chartRef.current) {
//       // Create root element
//       const root = am5.Root.new(chartRef.current);

//       // Set themes
//       root.setThemes([am5themes_Animated.new(root)]);

//       // Create chart
//       const chart = root.container.children.push(
//         am5percent.PieChart.new(root, {
//           endAngle: 270
//         })
//       );

//       // Create series
//       const series = chart.series.push(
//         am5percent.PieSeries.new(root, {
//           valueField: "value",
//           categoryField: "category",
//           endAngle: 270
//         })
//       );

//       series.states.create("hidden", {
//         endAngle: -90
//       });

//       // Define custom colors for each part
//       const colors = [
//         am5.color(0xff0000), // Custom color for Search Engine
//         am5.color(0x36a2eb), // Custom color for Direct
//         am5.color(0x4bc0c0), // Custom color for Email
//         am5.color(0xffce56), // Custom color for Union Ads
//         am5.color(0xff9f40)  // Custom color for Video Ads
//       ];

//       // Set data with colors
//       series.data.setAll([
//         { category: "Search Engine", value: 1048, color: colors[0] },
//         { category: "Direct", value: 735, color: colors[1] },
//         { category: "Email", value: 580, color: colors[2] },
//         { category: "Union Ads", value: 484, color: colors[3] },
//         { category: "Video Ads", value: 300, color: colors[4] }
//       ]);

//       // Apply colors to series
//       series.slices.template.set("fill", am5.color(0xffffff)); // Default color

//       // Animate chart appearance
//       series.appear(1000, 100);

//       // Cleanup function to dispose of the chart instance on component unmount
//       return () => {
       
//         root.dispose();
//       };
//     }
//   }, []);

//   return <div ref={chartRef} style={{ width: '100%', height: '350px', }} />; // Chart container
// };

// export default PieChart;
