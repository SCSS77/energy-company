import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders the energy dashboard", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Consumo de energía");
  });

  it("renders the sidebar", () => {
    render(<App />);
    const sidebar = screen.getByText("Sidebar");
    expect(sidebar).toBeInTheDocument();
  });
});
