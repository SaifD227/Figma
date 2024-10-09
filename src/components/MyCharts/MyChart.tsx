'use client'
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const MyChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null); // Ref to the chart container

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current); // Initialize the chart

      const option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };

      myChart.setOption(option); // Set the chart options

      // Define a resize handler
      const handleResize = () => {
        myChart.resize();
      };

      // Handle window resize
      window.addEventListener("resize", handleResize);

      // Cleanup on component unmount
      return () => {
        myChart.dispose();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />; // Chart container
};

export default MyChart;
