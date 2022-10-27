import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useMemo, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController
);

// Component renders inside WeatherDetails
export const LocaleChart = (props: any) => {
  const { weatherData, displayedData } = props;

  const chartDataHourly: any = useMemo(() => {
    return {
      labels: weatherData.hourly.map((hour: any) => {
        return new Date(hour.dt * 1000).toISOString().substring(11, 16);
      }),
      datasets: [
        {
          type: "line" as const,
          label: "Temperature",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: weatherData.hourly.map((hour: any, i: number) => {
            return hour.temp;
          }),
        },
        {
          type: "bar" as const,
          label: "Precipitation",
          backgroundColor: "rgb(75, 192, 192",
          data: weatherData.hourly.map((hour: any, i: number) => {
            return hour.pop * 100;
          }),
          borderColor: "white",
          borderWidth: 2,
        },
      ],
    };
  }, [weatherData]);

  const chartDataDaily: any = useMemo(() => {
    return {
      labels: weatherData.daily.map((day: any) => {
        return new Date(day.dt * 1000)
          .toLocaleDateString("en-US", {
            weekday: "short",
            month: "numeric",
            day: "numeric",
          })
          .replace(",", "");
      }),
      datasets: [
        {
          type: "line" as const,
          label: "Temperature",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: weatherData.daily.map((day: any, i: number) => {
            return day.temp.day;
          }),
        },
        {
          type: "bar" as const,
          label: "Precipitation",
          backgroundColor: "rgb(75, 192, 192",
          data: weatherData.daily.map((day: any, i: number) => {
            return day.pop * 100;
          }),
          borderColor: "white",
          borderWidth: 2,
        },
      ],
    };
  }, [weatherData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${displayedData === "daily" ? "8-Day" : "48-Hour"} Forecast`,
      },
    },
  };

  console.log(displayedData);

  return (
    <Chart
      type="bar"
      options={options}
      data={displayedData === "daily" ? chartDataDaily : chartDataHourly}
    />
  );
};

export default LocaleChart;
