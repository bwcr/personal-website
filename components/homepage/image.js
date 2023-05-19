import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/legacy/image";

const WrapperImage = ({ alt }) => {
  return (
    <Box
      className="wrapper-image"
      h={300}
      w={300}
      rounded={"xl"}
      overflow={"hidden"}
      pos={"relative"}
    >
      <Image
        src="/jpg/me.jpg"
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="image"
      />
    </Box>
  );
};

export default WrapperImage;
