import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

const WrapperImage = ({ alt }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      className="wrapper-image"
      h={300}
      w={300}
      rounded={"xl"}
      overflow={"hidden"}
      pos={"relative"}
      ring={1}
      ringColor={colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300"}
    >
      <Image
        src="/jpg/me.jpg"
        alt={alt}
        width={300}
        height={300}
        className="image"
      />
    </Box>
  );
};

export default WrapperImage;
