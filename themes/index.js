import { tagAnatomy } from "@chakra-ui/anatomy";
import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const glassmorphism = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: mode("blackAlpha.50", "whiteAlpha.50")(props),
    backdropFilter: "blur( 4px )",
    ring: 1,
    ringColor: mode("blackAlpha.300", "whiteAlpha.300")(props),
    borderRadius: "10px",
    color: mode("gray.800", "gray.200")(props),
    _hover: {
      bg: mode("blackAlpha.300", "whiteAlpha.300")(props),
    },
    _active: {
      bg: mode("blackAlpha.400", "whiteAlpha.400")(props),
    },
    _focus: {
      bg: mode("blackAlpha.400", "whiteAlpha.400")(props),
    },
  };
});

export const Button = defineStyleConfig({
  variants: { glassmorphism },
  defaultProps: {
    variant: "glassmorphism",
  },
});

export const Link = defineStyleConfig({
  variants: {
    glassmorphism,
    slideUnderline: (props) => {
      const { colorScheme: c } = props;
      return {
        position: "relative",
        padding: ".2em 0",
        _after: {
          opacity: 0,
          transform: "translate3d(-20%, 0, 0)",
          transition: "transform .3s ease-in-out, opacity .3s ease-in-out",
          content: "''",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: ".1em",
          bg: mode(`${c}.500`, `${c}.300`)(props),
        },
        _hover: {
          textDecoration: "none",
          _after: {
            transform: "translate3d(0, 0, 0)",
            opacity: 1,
          },
        },
        _focus: {
          textDecoration: "none",
          _after: {
            transform: "translate3d(0, 0, 0)",
            opacity: 1,
          },
        },
        _active: {
          textDecoration: "none",
          _after: {
            transform: "translate3d(0, 0, 0)",
            opacity: 1,
          },
        },
      };
    },
  },
  defaultProps: {
    variant: "slideUnderline",
    colorScheme: "orange",
  },
});

export const Tag = defineStyleConfig({
  variants: { glassmorphism },
});

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "gray.200")(props),
      bg: mode("gray.100", "gray.900")(props),
    },
  }),
};

export const theme = extendTheme({
  styles,
  components: {
    Button,
    Link,
    Tag: {
      variants: {
        glassmorphism: {
          container: glassmorphism,
        },
      },
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
    mono: "Fira Code, monospace",
  },
  config,
});
