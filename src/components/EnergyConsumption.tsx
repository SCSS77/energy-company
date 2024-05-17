import React, { useEffect } from "react";
import { renderChart } from "../utils/chart";
import { groupByDay, sortByTime } from "../utils/reading";

interface EnergyReading {
  time: number;
  value: number;
}

interface EnergyConsumptionProps {
  readings: EnergyReading[];
}

export const EnergyConsumption: React.FC<EnergyConsumptionProps> = ({ readings }) => {
  const containerId = "usageChart";

  useEffect(() => {
    const formattedReadings = readings.map(reading => ({
      ...reading,
      time: new Date(reading.time).getTime()
    }));

    renderChart(containerId, sortByTime(groupByDay(formattedReadings)).slice(-30));
  }, [readings]);

  return (
    <>
      <h1 className="regular darkgray line-height-1 mb3">Consumo de energía</h1>
      <section className="mb3">
        <button
          className="
              h5
              inline-block
              shadow-2
              pl2
              pr2
              pt1
              pb1
              roundedMore
              border-grey
              bg-blue
              white
              bold
            "
        >
          Últimos 30 días
        </button>
      </section>
      <section className="chartHeight mb3">
        <canvas id={containerId} />
      </section>
    </>
  );
};
