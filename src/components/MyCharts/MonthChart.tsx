// my-next-app/app/MyCharts/MonthChart.tsx
"use client";
import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const MonthChart: React.FC = () => {
  useEffect(() => {
    // Check if the root element already exists, then dispose of it before creating a new one
    let root = am5.registry.rootElements.find((r) => r.dom.id === "chartdiv");
    if (root) {
      root.dispose();
    }

    root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        layout: root.verticalLayout,
      })
    );

    chart.set(
      "colors",
      am5.ColorSet.new(root, {
        colors: [
          am5.color(0x73556e),
          am5.color(0x9fa1a6),
          am5.color(0xf2aa6b),
          am5.color(0xf28f6b),
          am5.color(0xa95a52),
          am5.color(0xe35b5d),
          am5.color(0xffa446),
        ],
      })
    );

    // Create axes
    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 50,
      minorGridEnabled: true,
    });

    xRenderer.grid.template.setAll({
      location: 1,
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        min: 0,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    // Create series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({
      tooltipY: 0,
      tooltipText: "{categoryX}: {valueY}",
      shadowOpacity: 0.1,
      shadowOffsetX: 2,
      shadowOffsetY: 2,
      shadowBlur: 1,
      strokeWidth: 2,
      stroke: am5.color(0xffffff),
      shadowColor: am5.color(0x000000),
      cornerRadiusTL: 50,
      cornerRadiusTR: 50,
      fillGradient: am5.LinearGradient.new(root, {
        stops: [
          {}, // will use original column color
          { color: am5.color(0x000000) },
        ],
      }),
      fillPattern: am5.GrainPattern.new(root, {
        maxOpacity: 0.15,
        density: 0.5,
        colors: [am5.color(0x000000), am5.color(0x000000), am5.color(0xffffff)],
      }),
    });

    series.columns.template.states.create("hover", {
      shadowOpacity: 1,
      shadowBlur: 10,
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
    });

    series.columns.template.adapters.add("fill", function (fill: am5.Color, target: am5.Component) {
      return (
        chart.get("colors")?.getIndex(series.columns.indexOf(target)) || fill
      );
    });

    // Set data
    const data = [
      { country: "U", value: 2025 },
      { country: "C", value: 1282 },
      { country: "Jn", value: 909 },
      { country: "G", value: 752 },
      { country: "UK", value: 652 },
      { country: "I", value: 452 },
    ];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Make stuff animate on load
    series.appear(1000);
    chart.appear(1000, 100);

    // Clean up chart on unmount
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div>
      <style>
        {`
          #chartdiv {
            width: 96%;
            height: 200px;
            background-color:white;
            border-radius:20px;
          }
        `}
      </style>
      <div id="chartdiv" />
    </div>
  );
};

export default MonthChart;