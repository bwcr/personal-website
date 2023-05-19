import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  useColorMode,
  Stack,
  Switch,
  Slide,
  useDisclosure,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect } from "react";

export function Navbar({ collapsed }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const hideNav = useDisclosure({
    defaultIsOpen: true,
  });
  const collapse = useDisclosure({
    defaultIsOpen: false,
  });
  const handleClose = () => {
    // change class to header-wrapper-scrolled when scroll down and remove it when scroll up
    const headerWrapper = document.querySelector(".header-wrapper");
    headerWrapper.classList.add("header-wrapper-scrolled");
  };
  const handleOpen = () => {
    // change class to header-wrapper-scrolled when scroll down and remove it when scroll up
    const headerWrapper = document.querySelector(".header-wrapper");
    headerWrapper.classList.remove("header-wrapper-scrolled");
  };

  function handleResume() {
    return window.open("/pdf/Bayu Wicaksono - IT Resume.pdf", "_blank");
  }

  // hide navbar when scroll down and show it when scroll up but not in mobile
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    // if page reached top then show navbar
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      // if page reached top then show navbar
      if (currentScrollPos < 150) {
        handleOpen();
        hideNav.onOpen();
      } else if (prevScrollpos > currentScrollPos) {
        // handleOpen();
        hideNav.onOpen();
      } else {
        handleClose();
        hideNav.onClose();
      }
      prevScrollpos = currentScrollPos;
    };
  }, [hideNav]);

  const navigations = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const mobile = useBreakpointValue({ base: true, md: false });

  return (
    <Slide style={{ zIndex: 999 }} direction="top" in={hideNav.isOpen}>
      <Box position={"relative"} className="header-wrapper">
        <Container maxW={"container.xl"} py={12} as={"header"}>
          <Stack
            w="full"
            as="nav"
            mx={"auto"}
            alignItems={"center"}
            justifyContent={"space-between"}
            direction={"row"}
          >
            <Box>
              <Heading size={"lg"}>
                <NextLink href={"/"}>B</NextLink>
              </Heading>
            </Box>
            <Box>
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
                    onClick={handleResume}
                  >
                    Resume
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
              {mobile && (
                <>
                  <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    <Button
                      onClick={collapse.onToggle}
                      variant={"glassmorphism"}
                    >
                      {collapse.isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    </Button>
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
                </>
              )}
            </Box>
          </Stack>
          <Drawer
            isOpen={collapse.isOpen}
            onClose={collapse.onClose}
            placement="right"
          >
            <DrawerOverlay />
            <DrawerContent
              ring={1}
              ringColor={
                colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200"
              }
              bg={colorMode === "dark" ? "whiteAlpha.50" : "blackAlpha.50"}
              backdropFilter={"blur(10px)"}
            >
              <DrawerCloseButton />
              <DrawerBody>
                <Stack
                  spacing={6}
                  direction={"column"}
                  alignItems={"center"}
                  p={4}
                >
                  {navigations.map((link) => (
                    <NextLink key={link.label} href={link.href} passHref>
                      <Link
                        color="gray.200"
                        // color={colorMode === "dark" ? "gray.200" : "gray.800"}
                        onClick={collapse.onClose}
                        scroll={false}
                      >
                        {link.label}
                      </Link>
                    </NextLink>
                  ))}
                  {/* Button to download pdf file */}
                  <Button
                    variant={"glassmorphism"}
                    color={"gray.200"}
                    ringColor={"gray.200"}
                    onClick={handleResume}
                  >
                    Resume
                  </Button>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Container>
      </Box>
    </Slide>
  );
}
