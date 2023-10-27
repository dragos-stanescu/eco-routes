import { useParams } from "react-router-dom";
import { useSingleTrip } from "hooks/tripsHooks";
import {
  Box,
  Spinner,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Divider,
  Link,
} from "@chakra-ui/react";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { TripAdvantage } from "components/trip-advantage/TripAdvantage";
import { TripAdvantageType } from "types/TripTypes";

const TripDetailedView = () => {
  const { id } = useParams();
  const { data: trip, isLoading } = useSingleTrip(id || "");

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
    <Box w={"full"} bg={"gray.100"} p={20}>
      <Link href="/trips" color="gray.500">
        <ChevronLeftIcon /> Go back
      </Link>

      <Heading mt={4} mb={2}>
        {trip.title}
      </Heading>

      <Text fontSize="lg" mb={6}>
        {trip.subtitle}
      </Text>

      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex={7} mr={{ md: 12 }}>
          <Image
            src={trip.photoUrl}
            alt={trip.title}
            h={"400px"}
            w={"full"}
            borderRadius="xl"
            objectFit="cover"
            mb={6}
          />
          <Heading size="md" mb={4}>
            Overview
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
            {trip.advantages.map(
              (advantage: TripAdvantageType, index: number) => (
                <TripAdvantage
                  key={index}
                  advantage={advantage}
                  iconIndex={index}
                />
              )
            )}
          </SimpleGrid>
          <Text mb={5}>{trip.description}</Text>
        </Box>

        <Box
          flex={3}
          p={8}
          bg="white"
          borderRadius="xl"
          boxShadow="md"
          maxH={"320px"}
        >
          <Text fontSize="24px" fontWeight="bold" mb={2}>
            {trip.days} days
          </Text>
          <Text fontSize="14px" mb={4} fontWeight={"bold"} color={"gray.600"}>
            Emissions: {trip.co2kilograms} kgCO
            <span style={{ verticalAlign: "sub" }}>2</span>e
          </Text>
          <Divider mb={4} />
          <Text fontWeight="bold" mb={2}>
            Countries included:
          </Text>
          <SimpleGrid columns={2} spacing={2}>
            {trip.countries.map((country: string, index: number) => (
              <Text key={index}>* {country}</Text>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default TripDetailedView;
