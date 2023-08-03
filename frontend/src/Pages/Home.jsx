import { Flex } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { MySlider } from "./Home/Banner";

export const Home = () => {
  return (
    <>
      <Flex bg="#fff">
        <Sidebar />
        {/* <>Home</> */}
        <MySlider />
      </Flex>
    </>
  );
};
