import { Box } from "@chakra-ui/react";
import { Date } from "./ui/Date";

export const ActivityTracker = () => {
  return (
    <Box bg="blue" w={3 / 7} h="100vh">
      <Date />
    </Box>
  );
};
