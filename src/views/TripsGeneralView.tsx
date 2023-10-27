import { Fragment } from "react";
import { SimpleGrid, Box, Spinner } from "@chakra-ui/react";
import { TripCard } from "components/trip-card/TripCard";
import { useInfiniteTrips } from "hooks/tripsHooks";
import { Waypoint } from "react-waypoint";
import { TripType } from "types/TripTypes";

const TripsGeneralView = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteTrips();

  const handleEnter = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, xl: 3 }}
      spacing={10}
      w={"full"}
      h={"full"}
      bg={"gray.100"}
      p={10}
    >
      {data?.pages.flatMap((page, i) => (
        <Fragment key={i}>
          {page.map((trip: TripType) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </Fragment>
      ))}
      {hasNextPage && (
        <Waypoint onEnter={handleEnter}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        </Waypoint>
      )}
    </SimpleGrid>
  );
};

export default TripsGeneralView;
