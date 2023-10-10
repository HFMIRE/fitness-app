import type { NextPage } from "next";
import Layout from "../components/layout";
import { HStack } from "@chakra-ui/react";
import { ActivityTracker } from "../components/ActivityTracker";
import { SideBar } from "../components/SideBar";
import { ActivityDisplay } from "../components/ActivityDisplay";

const Home: NextPage = () => {
  return (
    <HStack>
      {/* <SideBar />
      <ActivityDisplay />
      <ActivityTracker /> */}
    </HStack>
  );
};

export default Home;
