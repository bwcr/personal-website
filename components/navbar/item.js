import {
  Collapse,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Button, Stack, Switch } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";

const NavigationItems = () => {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure({
    defaultIsOpen: false,
  });
  const navigations = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  const { colorMode, toggleColorMode } = useColorMode();
  const mobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      {!mobile && (
        <Stack spacing={6} direction={"row"} alignItems={"center"}>
          {navigations.map((link) => (
            <NextLink scroll={false} href={link.href} key={link.label}>
              {link.label}
            </NextLink>
          ))}
          {/* Button to download pdf file */}
          <Button
            // variant="outline"
            variant={"glassmorphism"}
            colorScheme="orange"
            onClick={() =>
              window.open("/Bayu Wicaksono - Resume.pdf", "_blank")
            }
          >
            Download Resume
          </Button>
          {/* Toggle dark mode */}
          <Stack direction={"row"} spacing={2}>
            <SunIcon />
            <Switch
              colorScheme="orange"
              isChecked={colorMode === "dark"}
              onChange={toggleColorMode}
            />
            <MoonIcon />
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default NavigationItems;
