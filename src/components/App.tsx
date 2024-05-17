import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { EnergyConsumption } from "./EnergyConsumption";
import { getReadings } from "../utils/reading";
import '../assets/scss/basscss.scss';

interface Reading {
  time: number;
  value: number;
}

export const App: React.FC = () => {
  const [readings, setReadings] = useState<Reading[] | null>(null);

  useEffect(() => {
    const fetchReadings = async () => {
      const result = await getReadings();
      const convertedReadings = result.map(reading => ({
        time: new Date(reading.time).getTime(),
        value: reading.value
      }));
      setReadings(convertedReadings);
    };

    fetchReadings();
  }, []);

  if (!readings) {
    return null;
  }

  return (
    <div className="bg-super-light-grey shadow-2 flex overflow-hidden">
      <aside className="p3 menuWidth overflow-auto">
        <Sidebar />
      </aside>
      <article className="bg-very-light-grey p3 flex-auto overflow-auto">
        <EnergyConsumption readings={readings} />
      </article>
    </div>
  );
};
