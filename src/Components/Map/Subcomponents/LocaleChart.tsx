import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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
        text: "8-day Forecast",
      },
    },
  };

  const chartData: any = useMemo(() => {
    return {
      labels: weatherDataHourly.map((hour: any) => {
        return new Date(hour.dt * 1000).toISOString().substring(11, 16);
        //   .toLocaleDateString("en-US", {
        //     weekday: "short",
        //     month: "numeric",
        //     day: "numeric",
        //   })
        //   .replace(",", "");
      }),
      datasets: [
        {
          label: "Temperature",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: weatherDataHourly.map((hour: any, i: number) => {
            return hour.temp;
          }),
        },
      ],
    };
  }, [weatherDataHourly]);

  console.log(chartData);

  //   const labels = [1, 2, 3, 4, 5, 6, 7];
  //   const data = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: "My First Dataset",
  //         data: [65, 59, 80, 81, 56, 55, 40],
  //         fill: false,
  //         borderColor: "rgb(75, 192, 192)",
  //         tension: 0.1,
  //       },
  //     ],
  //   };

  return <Line options={options} data={chartData} />;
};

export default LocaleChart;
