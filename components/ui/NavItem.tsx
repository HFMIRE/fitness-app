import { Box, Flex, HStack, Text, Center } from "@chakra-ui/react";
import { RiHome5Fill, RiTimerFill } from "react-icons/ri";
import { BiSolidMedal } from "react-icons/bi";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { SiLightning } from "react-icons/si";
import { FaMap, FaCog } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
export const NavItem = () => {
  return (
    <Box>
      <Box p={2}>
        <HStack spacing="24px">
          <RiHome5Fill color="white" size={28} />
          <Text color="white" fontSize={"xl"}>
            Overview
          </Text>
        </HStack>
      </Box>
      <Box p={2}>
        <HStack spacing="24px">
          <BiSolidMedal color="white" size={28} />
          <Text color="white" fontSize={"xl"}>
            Competition
          </Text>
        </HStack>
      </Box>

      <Box p={2}>
        <HStack spacing="24px">
          <RiTimerFill color="white" size={28} />
          <Text color="white" fontSize={"xl"}>
            Timer
          </Text>
        </HStack>
      </Box>
      <Box p={2}>
        <HStack spacing="24px">
          <SiLightning color="white" size={28} />
          <Text color="white" fontSize={"xl"}>
            {" "}
            Energy
          </Text>
        </HStack>
      </Box>
      <Box p={2}>
        <HStack spacing="24px">
          <BsFillCalendarWeekFill color="white" size={28} />
          <Text color="white" fontSize={"xl"}>
            Calender
          </Text>
        </HStack>
      </Box>
      <Box p={2}>
        <HStack spacing="24px">
          <FaMap color="white" size={28} />
          <Text color="white" fontSize={"xl"}>
            Distance
          </Text>
        </HStack>
      </Box>
      <Box p={2}>
        <HStack spacing="24px">
          <GoPersonFill color="white" size={28} />
          <Text color="white" fontSize={"xl"}>
            Profile
          </Text>
        </HStack>
      </Box>
      <Box p={2}>
        <HStack spacing="24px">
          <FaCog color="white" size={28} />
          <Text color="white" fontFamily={"body"} fontSize={"xl"}>
            Setting
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};
