import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EnergyConsumption } from "./EnergyConsumption";

describe("EnergyConsumption", () => {
  it("renders energy consumption section", async () => {
    const readings = [
      { time: 1635014400000, value: 10 },
      { time: 1635100800000, value: 15 },
      { time: 1635187200000, value: 20 }
    ];
    render(<EnergyConsumption readings={readings} />);
    const heading = await screen.findByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Consumo de energía");
  });
});
