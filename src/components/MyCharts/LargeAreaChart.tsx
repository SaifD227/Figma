'use client'
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

// Define a functional component
const LargeAreaChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null); // Create a reference for the chart container

  useEffect(() => {
    if (!chartRef.current) return; // Ensure the ref is set

    const myChart = echarts.init(chartRef.current); // Initialize the chart
    let base: number; // Declare base variable
    base = new Date(1968, 9, 3).getTime(); // Assign base date using getTime()

    const oneDay = 24 * 3600 * 1000; // Milliseconds in a day
    const date: string[] = [];
    const data: number[] = [Math.random() * 300]; // Initialize data with a random number

    // Generate date and data points
    for (let i = 1; i < 20000; i++) {
      const now = new Date((base += oneDay));
      date.push(
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
      );
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1])); // Generate fake data
    }

    // Define chart options
    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "axis",
        position: (pt: number[]) => [pt[0], "10%"], // Tooltip position
      },
      title: {
        left: "center",
        text: "Large Area Chart",
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: date, // X-axis data
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
      },
      dataZoom: [
        {
          type: "inside",
          start: 0,
          end: 10,
        },
        {
          start: 0,
          end: 10,
        },
      ],
      series: [
        {
          name: "Fake Data",
          type: "line",
          symbol: "none",
          sampling: "lttb",
          itemStyle: {
            color: "rgb(255, 70, 131)",
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 158, 68)",
              },
              {
                offset: 1,
                color: "rgb(255, 70, 131)",
              },
            ]),
          },
          data: data, // Data for the series
        },
      ],
    };

    myChart.setOption(option); // Set the options for the chart

    // Clean up function to dispose of the chart on unmount
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />; // Chart container with styles
};

export default LargeAreaChart;
