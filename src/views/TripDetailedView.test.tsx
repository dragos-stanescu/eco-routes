import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { useSingleTrip } from "hooks/tripsHooks";
import { useParams, MemoryRouter } from "react-router-dom";
import TripDetailedView from "./TripDetailedView";

jest.mock("hooks/tripsHooks", () => {
  return {
    useSingleTrip: jest.fn(),
  };
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
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
describe("TripDetailedView Component", () => {
  beforeEach(() => {
    (useSingleTrip as jest.Mock).mockReturnValue({
      data: mockTrip,
      isLoading: false,
    });

    (useParams as jest.Mock).mockReturnValue({ id: "1" });
  });

  test("renders correctly", () => {
    render(<TripDetailedView />);
    expect(screen.getByText(mockTrip.title)).toBeInTheDocument();
    expect(screen.getByText(mockTrip.subtitle)).toBeInTheDocument();
    expect(screen.getByText(`${mockTrip.days} days`)).toBeInTheDocument();
    mockTrip.countries.forEach((country) => {
      expect(screen.getByText(`* ${country}`)).toBeInTheDocument();
    });
    mockTrip.advantages.forEach((advantage) => {
      expect(screen.getByText(advantage.title)).toBeInTheDocument();
    });
    expect(screen.getByText(mockTrip.description)).toBeInTheDocument();
    expect(screen.getByText("Go back")).toBeInTheDocument();
  });

  test("navigates back to /trips on Go back link click", () => {
    render(
      <MemoryRouter initialEntries={["/trips/1"]}>
        <TripDetailedView />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Go back"));

    expect(window.location.pathname).toBe("/");
  });
});
