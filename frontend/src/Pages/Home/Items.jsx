// using inside banner.jsx
import { Box, Grid, Image, Heading, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Items = () => {
  const [products, setProduct] = useState([]);

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <br /> */}
      <Grid
        m="20px"
        templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
        gap={4}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Flex justifyContent={"center"}>
              <Link to={`/product/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  height="250px"
                  margin="10px"
                  width="100%"
                  cursor={"pointer"}
                  objectFit={"cover"}
                />
              </Link>
            </Flex>

            <Box p="4">
              <Heading size="sm" mb="2">
                {product.title}
              </Heading>
              <Flex gap="10px">
                <b>Rs.</b> <Text color="red.600"> {product.price}</Text>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>
    </>
  );
};
