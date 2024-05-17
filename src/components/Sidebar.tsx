import React from "react";

interface DeviceSectionProps {
  title: string;
  usage: string;
}

const DeviceSection: React.FC<DeviceSectionProps> = ({ title, usage }) => (
  <div className="shadow-2 roundedMore bg-super-light-grey mb1">
    <p className="darkgray pl2 pt1 pb1">{title}</p>
    <p className="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">{usage}</p>
  </div>
);

interface SummarySectionProps {
  summary: string;
  subtitle: string;
}

const SummarySection: React.FC<SummarySectionProps> = ({ summary, subtitle }) => (
  <>
    <h2 className="h2 brown">{summary}</h2>
    <p className="darkgray mb2">{subtitle}</p>
  </>
);

export const Sidebar: React.FC = () => (
  <>
    <SummarySection summary="⚡️ 1.4kW" subtitle="Consumo de energía" />
    <SummarySection summary="☀️️ 5.8kW" subtitle="Energía solar" />
    <SummarySection summary="🔌️ 4.4kW" subtitle="Vertido de energía" />

    <section className="h5 darkgray mb2">
      <h4 className="h4 mb1">Tus aparatos:</h4>
      <DeviceSection title="Aire acondicionado" usage="0.3093kW" />
      <DeviceSection title="Router Wi-Fi" usage="0.0033kW" />
      <DeviceSection title="Humidificador" usage="0.0518kW" />
      <DeviceSection title="Smart TV" usage="0.1276kW" />
      <DeviceSection title="Difusor" usage="0.0078kW" />
      <DeviceSection title="Refrigerador" usage="0.0923kW" />
    </section>
  </>
);
