import { Flex, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  let style = {
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    background: "rgba(135, 135, 135, 0.2)",
  };
  return (
    <>
      <Flex
        bg={"rgba(9, 9, 9, 0.829)"}
        justifyContent={"space-between"}
        flexDirection={"column"}
        height={"100vh"}
        // bg="blue"
        width={{ base: "250px", md: "250px", sm: "40%" }}
        position={"sticky"}
        top="0"
      >
        <Flex
          justifyContent={"start"}
          alignItems={"center"}
          gap={"15px"}
          flexDirection={"column"}
          p={"20px"}
        >
          {/*  */}
          <NavLink
            exact
            activeClassName="active-link"
            style={style}
            to="/deshboard"
          >
            <Flex
              color={"white"}
              p={"6px 10px"}
              alignItems={"center"}
              justifyContent={"center"}
              gap="10px"
            >
              <i className="fa fa-home"></i>
              Home
            </Flex>
          </NavLink>
          {/*  */}
          <NavLink
            exact
            activeClassName="active-link"
            style={style}
            to="/products"
          >
            <Flex
              color={"white"}
              p={"6px 10px"}
              alignItems={"center"}
              justifyContent={"center"}
              gap="10px"
            >
              <i className="fa fa-home"></i>
              Products
            </Flex>
          </NavLink>
          {/*  */}

          {/* dropdonw */}
          <Flex
            flexDirection={"column"}
            color={"white"}
            width={"100%"}
            gap={"10px"}
          >
            <Flex
              style={style}
              bg="rgba(135, 135, 135, 0.2)"
              width={"100%"}
              p={"6px 20px"}
              alignItems={"center"}
              borderRadius={"10px"}
              justifyContent={"space-between"}
            >
              Filters <i className="fa fa-chevron-down"></i>
            </Flex>
            <Flex
              flexDirection={"column"}
              gap={"15px"}
              bg="rgba(135, 135, 135, 0.2)"
              p={"5px 20px"}
              style={style}
            >
              <Flex gap="10px">Hight to Low</Flex>
              <Flex gap="10px">Low to Hight</Flex>
              <Flex gap="10px">Hight to Low</Flex>
              <Flex gap="10px">Hight to Low</Flex>
            </Flex>
          </Flex>

          {/* dropdonw */}
        </Flex>
        {/*  */}

        <Flex m={"10px"} color="white">
          <Flex
            bg={"blue"}
            width={"100%"}
            style={style}
            p={"5px 20px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Heading size="md">Arun</Heading>
            <i className="fa fa-power-off"></i>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;
