/* eslint-disable react/no-unescaped-entities */
import { ExternalLinkIcon, WarningIcon } from "@chakra-ui/icons";
import {
  chakra,
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  Link,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tag,
  Image,
  Card,
  CardBody,
  LinkBox,
  LinkOverlay,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { getExperiences } from "../services/experience.service";
import { getHomepage } from "../services/homepage.service";
import { Navbar } from "../components/navbar";
import HomepageImage from "../components/homepage/image";
import { getSkills } from "../services/skills.service";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Head from "next/head";
import moment from "moment/moment";
import { SkipNavContent } from "@chakra-ui/skip-nav";

// import { InView } from "react-intersection-observer";

function Home({ homepage, experiences, skills }) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Bayu Wicaksono</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="description" content="Bayu Wicaksono's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" />

        <meta property="og:site_name" content="Bayu Wicaksono" />
        <meta property="og:title" content="Bayu Wicaksono" />
        <meta
          property="og:description"
          content="Bayu Wicaksono's personal website"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bayuwicaksono.com" />

        <meta name="twitter:site" content="@bwcr_" />
        <meta name="twitter:creator" content="@bwcr_" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bayu Wicaksono" />
        <meta
          name="twitter:description"
          content="Bayu Wicaksono's personal website"
        />
        <meta name="twitter:url" content="https://bayuwicaksono.com" />
      </Head>
      <Box position={"relative"} overflow={"hidden"}>
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
        <SkipNavContent />
        <Container maxW={"container.xl"} mx={"auto"} px={6}>
          {/* Header */}
          <Stack justify={"center"} minH={"100vh"} py={6} as={"section"}>
            <Stack spacing={[2, 4, 6]}>
              <Box className="animate__animated animate__fadeIn">
                <Heading size={["2xl", "3xl", "4xl"]}>
                  {homepage.attributes.name}
                </Heading>
              </Box>
              <Box className="animate__animated animate__fadeIn">
                <Heading
                  color={colorMode === "light" ? "orange.500" : "orange.500"}
                  size={["xl", "2xl", "3xl"]}
                >
                  {homepage.attributes.headline}
                </Heading>
              </Box>
              <Box
                maxW={"container.md"}
                className="animate__animated animate__fadeIn"
              >
                <Text
                  fontSize={[14, 16, 18]}
                  color={colorMode === "dark" ? "gray.200" : "gray.800"}
                >
                  {homepage.attributes.description}
                </Text>
              </Box>
              <Stack className="animate__animated animate__fadeIn">
                {/* Contact Button */}
                <Link
                  variant={"glassmorphism"}
                  fontSize={["md", "lg", "xl"]}
                  size={"lg"}
                  w={"fit-content"}
                  h={"full"}
                  px={6}
                  py={3}
                  bgColor={colorMode === "light" ? "orange.500" : "orange.500"}
                  color={colorMode === "light" ? "white" : "white"}
                  _hover={{
                    bgColor:
                      colorMode === "light" ? "orange.600" : "orange.600",
                  }}
                  _active={{
                    bgColor:
                      colorMode === "light" ? "orange.700" : "orange.700",
                  }}
                  _focus={{
                    bgColor:
                      colorMode === "light" ? "orange.700" : "orange.700",
                  }}
                  ringColor={
                    colorMode === "light" ? "orange.500" : "orange.500"
                  }
                  fontWeight={"bold"}
                  href={"#contact"}
                >
                  Contact Me
                </Link>
              </Stack>
            </Stack>
          </Stack>
          {/* About Me Section */}
          <Stack
            justify={"center"}
            id="about"
            w="full"
            minH={"100vh"}
            py={6}
            as={"section"}
          >
            <Stack spacing={4}>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <HStack spacing={4} maxW={"container.md"}>
                  <Flex shrink={0}>
                    <Heading size={"xl"}>About Me</Heading>
                  </Flex>
                  {/* add horizontal line */}
                  <Box
                    w={"full"}
                    h={"1px"}
                    bg={colorMode === "light" ? "orange.500" : "orange.500"}
                    my={4}
                  />
                </HStack>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <Stack
                  direction={{
                    base: "column-reverse",
                    md: "row",
                  }}
                  spacing={4}
                >
                  <Stack spacing={4} maxW={"container.md"}>
                    <Flex
                      p={6}
                      rounded={"xl"}
                      ring={"1px"}
                      ringColor={
                        colorMode === "light"
                          ? "blackAlpha.300"
                          : "whiteAlpha.300"
                      }
                      backdropBlur={4}
                      backgroundColor={
                        colorMode === "light"
                          ? "blackAlpha.50"
                          : "whiteAlpha.50"
                      }
                      color={colorMode === "light" ? "gray.600" : "gray.400"}
                      direction={"column"}
                      zIndex={-1}
                      gap={6}
                      fontSize={["sm", "md"]}
                      maxW={"container.md"}
                      // textAlign={"justify"}
                      dangerouslySetInnerHTML={{
                        __html: homepage.attributes.about_me,
                      }}
                    />
                    <Heading
                      color={colorMode === "light" ? "gray.600" : "gray.400"}
                      as={Text}
                      size={[14, 16]}
                    >
                      Here are a few technologies I've been working with
                      recently:
                    </Heading>
                    <SimpleGrid
                      as={UnorderedList}
                      columns={[1, 2, 3]}
                      spacing={2}
                    >
                      {[
                        "Responsive Web Design",
                        "Front-End Development",
                        "Chakra UI",
                        "JavaScript",
                        "HTML",
                        "REST APIs",
                        "SASS",
                        "React.js",
                        "Next.js",
                        "HTML5",
                        "Cascading Style Sheets (CSS)",
                        "Tailwind CSS",
                        "Web Applications",
                        "Vue.js",
                      ].map((skill) => (
                        <ListItem
                          color={
                            colorMode === "light" ? "gray.600" : "gray.400"
                          }
                          key={skill}
                          fontSize={"sm"}
                        >
                          {skill}
                        </ListItem>
                      ))}
                    </SimpleGrid>
                  </Stack>
                  <Stack
                    id="about-image"
                    className="wrapper"
                    position={"relative"}
                  >
                    <HomepageImage alt={homepage.attributes.name} />
                    {/* add wrapper */}
                    <Box
                      className="wrapper-shadow"
                      transition={"all 0.3s ease"}
                      position={"absolute"}
                      top={0}
                      left={0}
                      w={"300px"}
                      h={"300px"}
                      bgGradient={"radial(orange.100, orange.500)"}
                      opacity={0.5}
                      zIndex={-999}
                      filter={"blur(72px)"}
                      transform={"translate3d(0,0,0)"}
                      sx={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        MozBackfaceVisibility: "hidden",
                        perspective: 1000,
                        WebkitPerspective: 1000,
                        MozPerspective: 1000,
                      }}
                      animation={"css_pulse 10s infinite"}
                    />
                  </Stack>
                </Stack>
              </AnimationOnScroll>
            </Stack>
          </Stack>
          {/* Experiences Section */}
          <Stack
            justify={"center"}
            minH="100vh"
            id="experience"
            py={6}
            as={"section"}
          >
            <Stack spacing={0}>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <HStack spacing={4} maxW={"container.md"}>
                  <Flex shrink={0}>
                    <Heading size={"xl"}>Experiences</Heading>
                  </Flex>
                  {/* add horizontal line */}
                  <Box
                    w={"full"}
                    h={"1px"}
                    bg={colorMode === "light" ? "orange.500" : "orange.500"}
                    my={4}
                  />
                </HStack>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <Accordion
                  defaultIndex={[0]}
                  allowMultiple
                  maxW={"container.md"}
                  p={4}
                >
                  {experiences.map((experience) => (
                    <AccordionItem
                      borderLeft={"1px solid"}
                      borderLeftColor={
                        colorMode === "light" ? "orange.500" : "orange.500"
                      }
                      borderTop={0}
                      borderBottom={0}
                      key={experience.id}
                    >
                      {/* make a timeline layout */}
                      <AccordionButton
                        as={HStack}
                        key={experience.id}
                        position={"relative"}
                        maxW={"container.md"}
                        cursor={"pointer"}
                        _expanded={{
                          bg: "transparent",
                        }}
                        pt={0}
                        pb={2}
                      >
                        <Flex
                          direction={"column"}
                          position={"absolute"}
                          top="0"
                          left="-5px"
                          mt={1.5}
                        >
                          <Box
                            outline={"10px solid"}
                            outlineColor={
                              colorMode === "light" ? "gray.100" : "gray.900"
                            }
                            w="10px"
                            h="10px"
                            rounded="full"
                            bg={
                              colorMode === "light"
                                ? "orange.500"
                                : "orange.500"
                            }
                          />
                        </Flex>
                        <Stack>
                          <Box>
                            <Text
                              color={
                                colorMode === "light" ? "gray.600" : "gray.400"
                              }
                              fontSize={"sm"}
                            >
                              {/* get month and year */}
                              {moment(experience.attributes.start_date).format(
                                "MMM YYYY"
                              )}{" "}
                              -{" "}
                              {experience.attributes.end_date
                                ? moment(experience.attributes.end_date).format(
                                    "MMM YYYY"
                                  )
                                : "Present"}
                            </Text>
                          </Box>
                          <Box>
                            <Heading size={"lg"}>
                              {experience.attributes.role}
                            </Heading>
                          </Box>
                          <Box>
                            <Link
                              color={
                                colorMode === "light"
                                  ? "orange.500"
                                  : "orange.300"
                              }
                              // as={chakra.b}
                              isExternal
                              href={experience.attributes.company_url || "#"}
                              size={"sm"}
                            >
                              {experience.attributes.company}
                            </Link>
                          </Box>
                        </Stack>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pl={6} spacing={4}>
                        <Stack spacing={2}>
                          <Flex
                            position={"sticky"}
                            color={
                              colorMode === "light" ? "gray.600" : "gray.400"
                            }
                            // textAlign={"justify"}
                            ring={1}
                            ringColor={
                              colorMode === "light"
                                ? "blackAlpha.300"
                                : "whiteAlpha.300"
                            }
                            backdropBlur={4}
                            backgroundColor={
                              colorMode === "light"
                                ? "blackAlpha.100"
                                : "whiteAlpha.100"
                            }
                            backdropFilter={"blur(4px)"}
                            p={4}
                            rounded={"md"}
                            direction={"column"}
                            gap={6}
                            fontSize={"sm"}
                            dangerouslySetInnerHTML={{
                              __html: experience.attributes.description,
                            }}
                          />
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimationOnScroll>
            </Stack>
          </Stack>
          {/* Projects Section */}
          <Stack
            justify={"center"}
            minH="100vh"
            id="projects"
            py={6}
            as={"section"}
          >
            <Stack spacing={0}>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <HStack spacing={4} maxW={"container.md"}>
                  <Flex shrink={0}>
                    <Heading size={"xl"}>Projects</Heading>
                  </Flex>
                  {/* add horizontal line */}
                  <Box w={"full"} h={"1px"} bg={"orange.300"} my={4} />
                </HStack>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <Box position={"relative"}>
                  <Stack
                    maxW={"container.lg"}
                    spacing={{
                      base: 6,
                      md: 40,
                    }}
                    pt={6}
                  >
                    {[
                      {
                        id: 1,
                        attributes: {
                          name: "Project 1",
                          image: "https://placehold.co/580x360/gray/darkgray",
                          company: "Company 1",
                          description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                          url: "https://github.com",
                        },
                      },
                    ].map((project) => (
                      // Create a 2 column grid layout with image on the left and text on the right
                      <Stack
                        filter={"blur(10px)"}
                        direction={
                          project.id % 2 !== 0
                            ? { base: "column", md: "row" }
                            : { base: "column", md: "row-reverse" }
                        }
                        spacing={4}
                        key={project.id}
                      >
                        <Box
                          className="project-image-wrapper"
                          flexShrink={{
                            base: 1,
                            md: 0,
                          }}
                          position={"relative"}
                        >
                          <LinkBox position={"relative"}>
                            <Image
                              className="project-image-actual"
                              rounded={"md"}
                              // zIndex={-999}
                              position={"relative"}
                              alt={project.attributes.name}
                              src={project.attributes.image}
                            />
                            <Box
                              className="project-image-overlay"
                              transition={"all 0.3s ease"}
                              filter={"blur(24px)"}
                              sx={{
                                backfaceVisibility: "hidden",
                                WebkitBackfaceVisibility: "hidden",
                                MozBackfaceVisibility: "hidden",
                                perspective: 1000,
                                WebkitPerspective: 1000,
                                MozPerspective: 1000,
                              }}
                              transform={"translate3d(0,0,0)"}
                              position={"absolute"}
                              zIndex={-999}
                              top={0}
                              left={0}
                              w={"full"}
                              h={"full"}
                              bg={"orange.300"}
                              opacity={0.5}
                              rounded={"md"}
                            />
                            <LinkOverlay
                              href={project.attributes.url}
                              isExternal
                            />
                          </LinkBox>
                        </Box>
                        {/* create a card with hover shadow contains project name, description and link to github */}
                        <Stack spacing={4} alignSelf={"center"}>
                          <Stack w={"full"}>
                            <Box
                              alignSelf={
                                project.id % 2 === 0
                                  ? { md: "flex-start" }
                                  : { md: "flex-end" }
                              }
                            >
                              <Tag variant={"glassmorphism"}>
                                {project.attributes.company}
                              </Tag>
                            </Box>
                            <Heading
                              size={"lg"}
                              textAlign={
                                project.id % 2 === 0
                                  ? { md: "left" }
                                  : { md: "right" }
                              }
                            >
                              {project.attributes.name}
                            </Heading>
                          </Stack>
                          <Card
                            position={"relative"}
                            rounded={"xl"}
                            ring={"1px"}
                            ringColor={
                              colorMode === "light"
                                ? "blackAlpha.300"
                                : "whiteAlpha.300"
                            }
                            backdropBlur={4}
                            bgColor={
                              colorMode === "light"
                                ? "blackAlpha.50"
                                : "whiteAlpha.50"
                            }
                            color={
                              colorMode === "light" ? "gray.600" : "gray.400"
                            }
                          >
                            <CardBody>
                              <Text
                                color={
                                  colorMode === "light"
                                    ? "gray.600"
                                    : "gray.400"
                                }
                                textAlign={
                                  project.id % 2 === 0
                                    ? { md: "left" }
                                    : { md: "right" }
                                }
                              >
                                {project.attributes.description}
                              </Text>
                            </CardBody>
                          </Card>
                          <Stack w={"full"}>
                            <Link
                              fontSize={"sm"}
                              alignSelf={
                                project.id % 2 === 0
                                  ? { md: "flex-start" }
                                  : { md: "flex-end" }
                              }
                              color={
                                colorMode === "light" ? "gray.600" : "gray.400"
                              }
                              fontWeight={"bold"}
                              isExternal
                              href={project.attributes.url}
                            >
                              View on Github <ExternalLinkIcon mx="2px" />
                            </Link>
                          </Stack>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                  {/* Coming Soon */}
                  <Stack
                    maxW={"container.lg"}
                    spacing={{
                      base: 6,
                      md: 40,
                    }}
                    sx={{
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                    pt={6}
                    position={"absolute"}
                  >
                    <Stack
                      direction={"column"}
                      spacing={4}
                      ring={1}
                      ringColor={
                        colorMode === "dark"
                          ? "whiteAlpha.300"
                          : "blackAlpha.300"
                      }
                      rounded={"xl"}
                      backdropBlur={4}
                      bgColor={
                        colorMode === "dark" ? "whiteAlpha.50" : "blackAlpha.50"
                      }
                      color={colorMode === "light" ? "gray.800" : "gray.200"}
                      p={6}
                    >
                      {/* Big logo warning */}
                      <Box
                        alignSelf={"center"}
                        rounded={"full"}
                        bg={"whiteAlpha.300"}
                        p={2}
                        color={"white"}
                        boxShadow={"lg"}
                      >
                        <WarningIcon w={12} h={12} />
                      </Box>
                      <Heading
                        size={"xl"}
                        textAlign={"center"}
                        textShadow={"md"}
                      >
                        Coming Soon
                      </Heading>
                      {/* In the meantime visit my Github Profile */}
                      <Stack direction={"row"} justify={"center"} spacing={2}>
                        <chakra.span>
                          In the meantime, visit my Github Profile:{" "}
                          <Link
                            fontSize={"sm"}
                            alignSelf={"center"}
                            color={
                              colorMode === "light" ? "gray.800" : "gray.200"
                            }
                            isExternal
                            href={"https://github.com/bwcr"}
                          >
                            <chakra.span fontWeight={"bold"}>
                              @bwcr <ExternalLinkIcon mx="2px" />
                            </chakra.span>
                          </Link>{" "}
                          <Link
                            fontSize={"sm"}
                            alignSelf={"center"}
                            color={
                              colorMode === "light" ? "gray.800" : "gray.200"
                            }
                            isExternal
                            href={
                              "https://github.com/bayu-wicaksono-at-insignia"
                            }
                          >
                            <chakra.span fontWeight={"bold"}>
                              @bayu-wicaksono-at-insignia{" "}
                              <ExternalLinkIcon mx="2px" />
                            </chakra.span>
                          </Link>
                        </chakra.span>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </AnimationOnScroll>
            </Stack>
          </Stack>
          {/* Contact Section */}
          <Stack
            justify={"center"}
            minH="100vh"
            h={"100%"}
            id="contact"
            py={6}
            as={"section"}
            pos={"relative"}
          >
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
              <Stack
                spacing={0}
                ring={1}
                ringColor={
                  colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300"
                }
                backdropBlur={4}
                bgColor={
                  colorMode === "light" ? "blackAlpha.50" : "whiteAlpha.50"
                }
                // color={colorMode === "light" ? "gray.600" : "gray.400"}
                rounded={"xl"}
                maxW={"container.sm"}
                mx={"auto"}
                p={6}
              >
                <Stack>
                  <Stack spacing={4} alignSelf={"center"}>
                    <Stack w={"full"}>
                      {/* Photo of me */}
                      <Box alignSelf={"center"}>
                        <Avatar
                          size={"xl"}
                          name={"Bayu Wicaksono"}
                          src={"/jpg/me.jpg"}
                          shadow={"lg"}
                          loading={"lazy"}
                        />
                      </Box>
                      <Heading size={"xl"} textAlign={"center"}>
                        Get in touch
                      </Heading>
                    </Stack>
                    <Text
                      textAlign={"center"}
                      color={colorMode === "light" ? "gray.800" : "gray.200"}
                    >
                      I am currently seeking new opportunities, and I am eager
                      to explore exciting prospects. I welcome any inquiries or
                      messages, as my inbox is always open.
                    </Text>
                    {/* Mail Link */}
                    <Stack direction={"row"} spacing={4} alignSelf={"center"}>
                      <Link
                        id="mail-link-cta"
                        href={"mailto:" + "bayuwicaksono98@gmail.com"}
                        isExternal
                        p={4}
                        fontSize={[14, 16]}
                        alignSelf={"center"}
                        rounded={"md"}
                        color="gray.200"
                        bg={colorMode === "light" ? "orange.500" : "orange.500"}
                        ringColor={
                          colorMode === "light" ? "orange.500" : "orange.500"
                        }
                        _hover={{
                          bg:
                            colorMode === "light" ? "orange.600" : "orange.600",
                        }}
                        _active={{
                          bg:
                            colorMode === "light" ? "orange.700" : "orange.700",
                        }}
                        _focus={{
                          bg:
                            colorMode === "light" ? "orange.700" : "orange.700",
                        }}
                        variant={"glassmorphism"}
                        fontWeight={"bold"}
                      >
                        Send me an email
                      </Link>
                    </Stack>
                  </Stack>
                </Stack>
                <Box>
                  {["orange.300", "orange.500", "orange.700"].map(
                    (color, index) => (
                      <Box
                        key={index}
                        bg={color}
                        filter={"blur(100px)"}
                        w={250}
                        h={250}
                        rounded={"full"}
                        top={index === 0 ? 80 : index === 1 ? 60 : 40}
                        left={index === 0 ? -40 : index === 1 ? 60 : 40}
                        position={"absolute"}
                        zIndex={-999}
                        opacity={0.2}
                        sx={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          MozBackfaceVisibility: "hidden",
                          perspective: 1000,
                          WebkitPerspective: 1000,
                          MozPerspective: 1000,
                        }}
                        // animation delay
                        animation={`css_pulse 10s ${
                          index === 0 ? 0 : index === 1 ? 2 : 4
                        }s infinite ease-in-out alternate`}
                      />
                    )
                  )}
                </Box>
              </Stack>
            </AnimationOnScroll>
          </Stack>
          {/* Footer */}
          <Stack
            as={"footer"}
            justifySelf={"flex-end"}
            py={6}
            spacing={4}
            justify={"center"}
          >
            <Stack direction={"row"} spacing={4} justify={"center"}>
              <Text fontSize={"sm"}>
                © {new Date().getFullYear()} {homepage.attributes.name}
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    // await promise all getExperiences and getHomepage
    const res = await Promise.all([
      getExperiences(),
      getHomepage(),
      getSkills(),
    ]);
    // return props
    return {
      props: {
        experiences: res[0].data,
        homepage: res[1].data,
        skills: res[2].data,
      },
    };
  } catch (err) {
    return {
      props: {
        experiences: [],
        homepage: [],
        skills: [],
      },
    };
  }
};

export default Home;
