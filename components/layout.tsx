import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./ui/NavBar";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
interface Props {
  children?: ReactNode;
}
const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <Box>
      {pathname !== "/sign-in" && pathname !== "/sign-up" ? <Navbar /> : null}
      {children}
    </Box>
  );
};

export default Layout;
