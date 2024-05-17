import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  it("renders the summary sections", () => {
    render(<Sidebar />);

    const energySummary = screen.getByText("⚡️ 1.4kW");
    const solarSummary = screen.getByText("☀️️ 5.8kW");
    const energyFeedback = screen.getByText("🔌️ 4.4kW");

    expect(energySummary).toBeInTheDocument();
    expect(solarSummary).toBeInTheDocument();
    expect(energyFeedback).toBeInTheDocument();
  });

  it("renders the device sections", () => {
    render(<Sidebar />);

    const deviceTitles = [
      "Aire acondicionado",
      "Router Wi-Fi",
      "Humidificador",
      "Smart TV",
      "Difusor",
      "Refrigerador"
    ];

    deviceTitles.forEach(title => {
      const device = screen.getByText(title);
      expect(device).toBeInTheDocument();
    });
  });
});
