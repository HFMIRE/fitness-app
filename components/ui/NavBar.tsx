"use client";

import { Box, Flex, Button, useColorModeValue, Stack } from "@chakra-ui/react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";
interface Props {
  children: React.ReactNode;
}

export default function Navbar() {
  const { user } = useUser();
  console.log("user", user);
  return (
    <>
      <Box bg={"black"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box py={10} px={10}>
            <Image
              src="/logo.svg"
              width={75}
              height={75}
              alt="Rectangle PlaceHolder"
            />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {user ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <Link href={"/sign-in"}>
                  <Button colorScheme="white">Sign In</Button>
                </Link>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
