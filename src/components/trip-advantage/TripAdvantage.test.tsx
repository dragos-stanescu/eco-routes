import { render, screen } from "@testing-library/react";
import { TripAdvantage } from "./TripAdvantage";

const mockAdvantage = {
  title: "Advantage Title",
  description: "Advantage Description",
};

describe("TripAdvantage Component", () => {
  test("renders advantage title and description correctly", () => {
    render(<TripAdvantage advantage={mockAdvantage} iconIndex={1} />);

    expect(screen.getByText("Advantage Title")).toBeInTheDocument();
    expect(screen.getByText("Advantage Description")).toBeInTheDocument();
  });

  test("renders correct icon based on iconIndex", () => {
    render(<TripAdvantage advantage={mockAdvantage} iconIndex={1} />);

    expect(screen.getByTestId("icon-svg")).toBeInTheDocument();
  });

  test("renders default icon if iconIndex is out of range", () => {
    render(<TripAdvantage advantage={mockAdvantage} iconIndex={10} />);

    expect(screen.getByTestId("icon-svg")).toBeInTheDocument();
  });
});
