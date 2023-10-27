import { useQuery } from "react-query";
import { fetchTrips, fetchTripById } from "services/tripService";

export const useTrips = () => {
  return useQuery("trips", fetchTrips);
};

export const useSingleTrip = (id: string) => {
  return useQuery(["trip", id], () => fetchTripById(id));
};
