// ChartComponent.tsx
'use client'
import React, { useLayoutEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const ChartComponent: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (chartRef.current) {
      // Create root element
      const root = am5.Root.new(chartRef.current);

      // Set themes
      root.setThemes([am5themes_Animated.new(root)]);

      // Sample data
      const data = [
        {
          name: 'Monica',
          steps: 45688,
          pictureSettings: {
            src: 'https://www.amcharts.com/wp-content/uploads/2019/04/monica.jpg',
          },
        },
        {
          name: 'Joey',
          steps: 35781,
          pictureSettings: {
            src: 'https://www.amcharts.com/wp-content/uploads/2019/04/joey.jpg',
          },
        },
        {
          name: 'Ross',
          steps: 25464,
          pictureSettings: {
            src: 'https://www.amcharts.com/wp-content/uploads/2019/04/ross.jpg',
          },
        },
        {
          name: 'Phoebe',
          steps: 18788,
          pictureSettings: {
            src: 'https://www.amcharts.com/wp-content/uploads/2019/04/phoebe.jpg',
          },
        },
        {
          name: 'Rachel',
          steps: 15465,
          pictureSettings: {
            src: 'https://www.amcharts.com/wp-content/uploads/2019/04/rachel.jpg',
          },
        },
        {
          name: 'Chandler',
          steps: 11561,
          pictureSettings: {
            src: 'https://www.amcharts.com/wp-content/uploads/2019/04/chandler.jpg',
          },
        },
      ];

      // Create chart
      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: 'none',
          wheelY: 'none',
          paddingBottom: 50,
          paddingTop: 40,
        })
      );

      // Create axes
      const xRenderer = am5xy.AxisRendererX.new(root, {
        minGridDistance: 60,
        minorGridEnabled: true,
      });
      xRenderer.grid.template.set('visible', false);

      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: 'name',
          renderer: xRenderer,
          paddingTop: 40,
        })
      );

      const yRenderer = am5xy.AxisRendererY.new(root, {});
      yRenderer.grid.template.set('strokeDasharray', [3]);

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          min: 0,
          renderer: yRenderer,
        })
      );

      // Add series
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Income',
          xAxis,
          yAxis,
          valueYField: 'steps',
          categoryXField: 'name',
          sequencedInterpolation: true,
          calculateAggregates: true,
          maskBullets: false,
          tooltip: am5.Tooltip.new(root, {
            dy: -30,
            pointerOrientation: 'vertical',
            labelText: '{valueY}',
          }),
        })
      );

      // Configure columns
      series.columns.template.setAll({
        strokeOpacity: 0,
        cornerRadiusBR: 10,
        cornerRadiusTR: 10,
        cornerRadiusBL: 10,
        cornerRadiusTL: 10,
        maxWidth: 50,
        fillOpacity: 0.8,
      });

      // Add images as bullets
      series.bullets.push(() => {
        const bulletContainer = am5.Container.new(root, {});

        // Removed the unused circle variable
        // const circle = bulletContainer.children.push(
        //   am5.Circle.new(root, {
        //     radius: 34,
        //   })
        // );

        const maskCircle = bulletContainer.children.push(
          am5.Circle.new(root, { radius: 27 })
        );

        const imageContainer = bulletContainer.children.push(
          am5.Container.new(root, {
            mask: maskCircle,
          })
        );

        imageContainer.children.push(
          am5.Picture.new(root, {
            templateField: 'pictureSettings',
            centerX: am5.p50,
            centerY: am5.p50,
            width: 60,
            height: 60,
          })
        );

        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: bulletContainer,
        });
      });

      // Set heat rules for color
      series.set('heatRules', [
        {
          dataField: 'valueY',
          min: am5.color(0xe5dc36),
          max: am5.color(0x5faa46),
          target: series.columns.template,
          key: 'fill',
        },
      ]);

      series.data.setAll(data);
      xAxis.data.setAll(data);

      // Add cursor
      const cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
      cursor.lineX.set('visible', false);
      cursor.lineY.set('visible', false);

      // Animate on load
      series.appear();
      chart.appear(1000, 100);

      return () => {
        root.dispose();
      };
    }
  }, []);

  return <div id="chartdiv" ref={chartRef} style={{ width: '100%', height: '430px' }}></div>;
};

export default ChartComponent;