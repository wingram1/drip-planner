import Chart, { ChartItem } from "chart.js/auto";
import { useRef, useEffect, useState } from "react";

// Component renders inside WeatherDetails

export const LocaleChart = (props: any) => {
  const { weatherData } = props;

  const labels = weatherData.map((day: any) => {
    return new Date(day.dt * 1000)
      .toLocaleDateString("en-US", {
        weekday: "short",
        month: "numeric",
        day: "numeric",
      })
      .replace(",", "");
  });

  const chartData = {
    labels: labels,
    datasets: weatherData.map((day: any, i: number) => {
      return {
        label: labels[i],
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [day.temp.max, day.temp.min],
      };
    }),
  };

  const chartRef = useRef<Chart | null>(null);

  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "line",
        data: chartData,
        options: {},
      });
    }
  };

  // update chart when props are updated
  useEffect(() => {
    // must verify chart exists
    if (chartRef.current) {
      chartRef.current.data = chartData;
      chartRef.current.update();
    }

    // cleanup function
    return () => {
      chartRef.current?.destroy();
    };
  }, [chartData]);

  return (
    <canvas
      id="localeChart"
      width="100%"
      height="200px"
      aria-label="Local Weather Details"
      role="img"
      ref={canvasCallback}
    ></canvas>
  );
};

export default LocaleChart;
