import * as chartJs from "chart.js/auto";

let chart: chartJs.Chart<"bar"> | undefined;

export const formatDateLabel = (timestamp: number): string => {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatPart = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return `${formatPart(day)}/${formatPart(month)}`;
};

interface Reading {
  time: number;
  value: number;
}

export const renderChart = (containerId: string, readings: Reading[]): void => {
  chartJs.defaults.font.size = 10;

  const labels = readings.map(({ time }) => formatDateLabel(time));
  const values = readings.map(({ value }) => value);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "kWh usage",
        data: values,
        fill: true,
        backgroundColor: "#5A8EDA",
        borderRadius: 10,
      },
    ],
  };

  if (chart) {
    chart.destroy();
  }

  const ctx = document.getElementById(containerId) as HTMLCanvasElement;

  chart = new chartJs.Chart(ctx, {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false,
    },
  });
};
