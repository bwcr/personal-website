import React from "react";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Navbar } from "../navbar";

const CustomError = ({ errorCode, message }) => {
  const { colorMode } = useColorMode();
  return (
    <Box pos={"relative"} overflow={"hidden"}>
      <Box>
        {["orange.100", "orange.500", "orange.300"].map((color, i) => (
          <Box
            key={color}
            position={"absolute"}
            w={"25vw"}
            h={"25vh"}
            zIndex={-999}
            top={i === 0 ? 0 : `${i * 150}`}
            right={`-${i + 50}`}
            animation={`css_pulse ${i + 8}s infinite`}
            filter={"blur(100px)"}
            transform={"translate3d(0,0,0)"}
            bg={colorMode === "light" ? color : color}
            rounded={"full"}
            sx={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              MozBackfaceVisibility: "hidden",
              perspective: 1000,
              WebkitPerspective: 1000,
              MozPerspective: 1000,
            }}
          />
        ))}
      </Box>
      <Navbar />
      <Container maxW={"container.xl"} mx={"auto"} px={6}>
        <Box
          w={"full"}
          h={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack spacing={4} textAlign={"center"} maxW={"3xl"}>
            <Heading
              color={colorMode === "light" ? "gray.900" : "gray.100"}
              size={"4xl"}
            >
              {errorCode}
            </Heading>
            <Text
              color={colorMode === "light" ? "gray.500" : "gray.400"}
              fontSize={"xl"}
            >
              {message}
            </Text>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomError;
