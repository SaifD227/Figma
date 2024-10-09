'use client'
import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const Chart: React.FC = () => {
  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");

    // Apply animated theme
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
      })
    );

    // Create data
    const data = [
      {
        country: "US",
        visits: 725,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/united-states.svg",
      },
      {
        country: "UK",
        visits: 625,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/united-kingdom.svg",
      },
      {
        country: "China",
        visits: 602,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/china.svg",
      },
      {
        country: "India",
        visits: 204,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/india.svg",
        columnSettings: { fill: am5.color(0xff0000) },
      },
      {
        country: "Spain",
        visits: 198,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/spain.svg",
        columnSettings: { fill: am5.color(0x00ff00) },
      },
      {
        country: "Nether",
        visits: 165,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/netherlands.svg",
        columnSettings: { fill: am5.color(0x0000ff) },
      },
      {
        country: "South",
        visits: 93,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/south-korea.svg",
        columnSettings: { fill: am5.color(0xffa500) },
      },
      {
        country: "Canada",
        visits: 41,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/canada.svg",
        columnSettings: { fill: am5.color(0x800080) },
      },
    ];

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "country",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
        }),
        bullet: (root, axis, dataItem) => {
          const dataContext = dataItem.dataContext as { icon: string };
          return am5xy.AxisBullet.new(root, {
            location: 0.5,
            sprite: am5.Picture.new(root, {
              width: 24,
              height: 24,
              centerY: am5.p50,
              centerX: am5.p50,
              src: dataContext.icon,
            }),
          });
        },
      })
    );

    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "visits",
        categoryXField: "country",
      })
    );

    series.data.setAll(data);

    series.columns.template.setAll({
      tooltipText: "{categoryX}: {valueY}",
      strokeOpacity: 0,
    });

    series.appear(1000);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "300px" }} />;
};

export default Chart;
