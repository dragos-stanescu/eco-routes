import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { TripCard } from "./TripCard";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(() => jest.fn()),
}));

const mockTrip = {
  id: 1,
  photoUrl: "https://picsum.photos/780/380?random=1",
  title: "European Quest",
  subtitle: "Lorem ipsum dolor sit amet",
  countries: [
    "Norway",
    "Poland",
    "Germany",
    "Austria",
    "Italy",
    "Switzerland",
    "France",
    "Spain",
  ],
  days: 21,
  co2kilograms: 4010.56,
  rating: 4.7,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.",
  advantages: [
    {
      title: "1st advantage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
    },
    {
      title: "2nd advantage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
    },
    {
      title: "3rd advantage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
    },
    {
      title: "4th advantage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo eget at dui.",
    },
  ],
};

describe("TripCard Component", () => {
  test("renders correctly", () => {
    render(<TripCard trip={mockTrip} />);
    expect(screen.getByText("European Quest")).toBeInTheDocument();
    expect(screen.getByText("8 Countries, 21 days")).toBeInTheDocument();
  });

  test("navigates to trip detail on Learn More click", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<TripCard trip={mockTrip} />);
    fireEvent.click(screen.getByText("Learn More"));

    expect(mockNavigate).toHaveBeenCalledWith("/trips/1");
  });
});
