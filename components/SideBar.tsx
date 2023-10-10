import { Box, HStack, Text, VStack, Container } from "@chakra-ui/react";
import { RiHome5Line } from "react-icons/ri";
import { NavItem } from "./ui/NavItem";
import Image from "next/image";
export const SideBar = () => {
  return (
    <VStack
      bg="quinary"
      w={1 / 7}
      h="100vh"
      borderTopRightRadius={5}
      borderBottomRightRadius={5}
      border={3}
    >
      <Box>
        <Image src={"./short-logo.svg"} height={30} width={30} alt="Logo" />
      </Box>

      <Container maxW="container.sm">
        <NavItem />
      </Container>
    </VStack>
  );
};
