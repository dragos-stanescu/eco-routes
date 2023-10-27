export type TripAdvantageType = {
  title: string;
  description: string;
};

export type TripType = {
  id: number;
  title: string;
  subtitle: string;
  countries: string[];
  days: number;
  co2kilograms: number;
  rating: number;
  description: string;
  advantages: TripAdvantageType[];
};
