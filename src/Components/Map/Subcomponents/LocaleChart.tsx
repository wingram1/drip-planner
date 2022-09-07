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
import { useMemo } from "react";

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
  const { weatherDataDaily, weatherDataHourly } = props;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "48-hour Forecast",
      },
    },
  };

  const chartData: any = useMemo(() => {
    return {
      labels: weatherDataHourly.map((hour: any) => {
        return new Date(hour.dt * 1000).toISOString().substring(11, 16);

        //\\\\\\\\\ 8-day forecast conversion
        //   .toLocaleDateString("en-US", {
        //     weekday: "short",
        //     month: "numeric",
        //     day: "numeric",
        //   })
        //   .replace(",", "");
      }),
      datasets: [
        {
          type: "line" as const,
          label: "Temperature",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: weatherDataHourly.map((hour: any, i: number) => {
            return hour.temp;
          }),
        },
        {
          type: "bar" as const,
          label: "Precipitation",
          backgroundColor: "rgb(75, 192, 192",
          data: weatherDataHourly.map((hour: any, i: number) => {
            return hour.pop * 100;
          }),
          borderColor: "white",
          borderWidth: 2,
        },
      ],
    };
  }, [weatherDataHourly]);

  console.log(chartData);

  return <Chart type="bar" options={options} data={chartData} />;
};

export default LocaleChart;
