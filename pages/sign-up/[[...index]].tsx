import { Box } from "@chakra-ui/react";
import { SignUp } from "@clerk/nextjs";

export default function signUp() {
  return (
    <Box mx={350} my={5}>
      <SignUp />
    </Box>
  );
}
