import { useInfiniteQuery, useQuery } from "react-query";
import { fetchTrips, fetchTripById } from "services/tripService";

export const useInfiniteTrips = () => {
  return useInfiniteQuery(
    "trips",
    ({ pageParam = 1 }) => fetchTrips(pageParam, 10),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 10) return undefined;
        return pages.length + 1;
      },
    }
  );
};
export const useSingleTrip = (id: string) => {
  return useQuery(["trip", id], () => fetchTripById(id));
};
