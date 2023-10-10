import { SignIn } from "@clerk/nextjs";
import { Box } from "@chakra-ui/react";
export default function signIn() {
  return (
    <Box mx={350} my={5}>
      <SignIn />
    </Box>
  );
}
