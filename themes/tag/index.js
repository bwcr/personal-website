import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { glassmorphism } from "..";
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

export const tagTheme = defineMultiStyleConfig({
  variants: {
    glassmorphism: definePartsStyle({
      container: glassmorphism,
    }),
  },
});
