import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { TripCard } from "components/trip-card/TripCard";
import { useTrips } from "hooks/tripsHooks";
import { TripType } from "types/TripTypes";

const TripsGeneralView = () => {
  const { data: trips, isLoading } = useTrips();

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, xl: 3 }}
      spacing={10}
      w={"full"}
      h={"full"}
      bg={"gray.100"}
      p={10}
      alignItems={"center"}
    >
      {trips.map((trip: TripType) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </SimpleGrid>
  );
};

export default TripsGeneralView;
