import { Button, Flex, Heading, Image, Text, Table, Thead, Tr, Th, Td, useBreakpointValue, Tag, Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const flexDir = useBreakpointValue({ base: "column", md: "row" });
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <Flex width={{ base: "100%", md: "100%", sm: "100%" }}> */}
      <Flex width={{ base: "100%", md: "100%", sm: "100%" }} flexDir={flexDir} p="15px">

        <Box height="100%" position={{ md: "sticky", sm: "relative" }} top="15px" width={{ base: "40%", md: "50%", sm: "100%" }}>
          <Image objectFit={"container"} src={data.image} />
          <Flex gap="20px" mt="50px" justifyContent={"center"}>
            <Image src={data.image} border={'1px solid rgba(0,0,0,0.2)'} p="5px" width="20%" cursor={'pointer'} />
            <Image src={data.image} border={'1px solid rgba(0,0,0,0.2)'} p="5px" width="20%" cursor={'pointer'} />
            <Image src={data.image} border={'1px solid rgba(0,0,0,0.2)'} p="5px" width="20%" cursor={'pointer'} />
            <Image src={data.image} border={'1px solid rgba(0,0,0,0.2)'} p="5px" width="20%" cursor={'pointer'} />
          </Flex>
        </Box>

        {/* Details */}
        <Flex p="40px" margin={"10px"} gap="20px" width={"100%"} flexDir={"column"}>
          <Heading as="h1" size="lg">
            {data.title}
          </Heading>
          <Text size="md">
            {data.description}
          </Text>
          <Heading size="sm">
            Product Price <Tag color={"red"}> Rs.{data.price}</Tag>
          </Heading>

          {/* Table  */}
          <Table width={"100%"} variant="striped" colorScheme="teal">
            {/* <TableCaption placement="top">Product List</TableCaption> */}
            <Thead>
              {/*  */}
              <Tr>
                <Th>Model Name Name</Th>
                <Td>{"product.stock"}</Td>
              </Tr>
              {/*  */}
              <Tr>
                <Th>Brand</Th>
                <Td>{"product.price"}</Td>
              </Tr>
              {/*  */}
              <Tr>
                <Th>Screen Size</Th>
                <Td>{"product.name"}</Td>
              </Tr>
              {/*  */}
              <Tr>
                <Th>Colour</Th>
                <Td>{"product.name"}</Td>
              </Tr>

              {/*  */}
              <Tr>
                <Th>Hard Disk Size</Th>
                <Td>{"product.name"}</Td>
              </Tr>
              {/*  */}
              <Tr>
                <Th>CPU Model</Th>
                <Td>{"product.name"}</Td>
              </Tr>
              {/*  */}
              <Tr>
                <Th>RAM Memory Installed Size</Th>
                <Td>{"product.name"}</Td>
              </Tr>
              <Tr>
                <Th>Operating System</Th>
                <Td>{"product.name"}</Td>
              </Tr>
              {/*  */}
            </Thead>
          </Table>
          {/* Table  */}
          <Flex gap="10px">
            <Button bg="royalblue" color="white">
              Buy Now
            </Button>
            <Button>Add Now</Button>
          </Flex>
        </Flex>
        {/* Details */}
      </Flex>
      {/* </Flex> */}
    </>
  );
};
