import { Box, Flex, Text } from "@chakra-ui/react";

import { EditIcon, CalendarIcon, LinkIcon, SunIcon } from "@chakra-ui/icons";

export const TripAdvantage = ({ advantage, iconIndex }) => {
  const renderIcon = (index) => {
    const availableIcons = [SunIcon, EditIcon, CalendarIcon, LinkIcon];

    if (index >= availableIcons.length) {
      return <SunIcon color={"black"} data-testid="icon-svg" />;
    }

    const IconComponent = availableIcons[index];
    return <IconComponent color={"black"} data-testid="icon-svg" />;
  };

  return (
    <Flex p={4}>
      <Box flex={1} mr={2}>
        {renderIcon(iconIndex)}
      </Box>
      <Box>
        <Text fontWeight="bold">{advantage.title}</Text>
        <Text>{advantage.description}</Text>
      </Box>
    </Flex>
  );
};
