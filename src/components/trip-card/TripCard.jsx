import { useNavigate } from "react-router-dom";
import { Box, Button, Text, VStack, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const TripCard = ({ trip }) => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate(`/trips/${trip.id}`);
  };

  return (
    <Box
      maxW={"md"}
      w={"full"}
      h={"300px"}
      bg={"white"}
      rounded={"md"}
      overflow={"hidden"}
      borderWidth={"10px"}
      borderRadius={"10px"}
      borderColor={"white"}
      backgroundImage={`url(${trip.photoUrl})`}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      boxShadow={"2xl"}
    >
      <VStack
        align={"center"}
        h={"100%"}
        justify={"space-between"}
        bg={"rgba(0, 0, 0, 0.3)"}
      >
        <Text
          color={"white"}
          fontWeight={700}
          fontSize={"28px"}
          mt={"20px"}
          align={"center"}
        >
          {trip.title}
        </Text>

        <Text color={"white"} fontWeight={400} fontSize={"14px"}>
          {trip.countries.length} Countries, {trip.days} days
        </Text>

        <Button
          w={"full"}
          maxW={"120px"}
          bg={"blue.600"}
          color={"white"}
          onClick={handleLearnMoreClick}
        >
          Learn More
        </Button>

        <Flex
          w={"full"}
          justifyContent={"space-between"}
          maxW={"300px"}
          color={"white"}
          bg={"blue.900"}
          p={3}
          rounded={"xl"}
        >
          <Text fontSize={"sm"}>Emissions:</Text>
          <Text fontSize={"sm"}>
            {trip.co2kilograms} kgCO
            <span style={{ verticalAlign: "sub" }}>2</span>e
          </Text>
        </Flex>

        <Flex
          mt="2"
          justifyContent={"space-between"}
          alignItems="center"
          rounded={"md"}
          bg={"white"}
          w={"300px"}
          h={"40px"}
          p={3}
          mb={-1}
        >
          <Text fontSize={"15px"} fontWeight={"bold"}>
            Trip Rating
          </Text>
          <Flex ml="2" color="black" alignItems="center" p={2}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < trip.rating ? "yellow.500" : "gray.300"}
                />
              ))}
            <Text fontSize={"15px"} fontWeight={"bold"} ml={2}>
              {trip.rating}
            </Text>
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
};
