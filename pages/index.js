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
  Card,
  CardBody,
  LinkBox,
  LinkOverlay,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../components/navbar";
import HomepageImage from "../components/homepage/image";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Head from "next/head";
import moment from "moment/moment";
import { SkipNavContent } from "@chakra-ui/skip-nav";

function Home({ meta, homepage, experiences, projects }) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="canonical" href={meta.website} key="canonical" />
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.website} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.website} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
      </Head>
      <Box position={"relative"} overflow={"hidden"}>
        <Box>
          {["orange.300", "orange.500", "orange.700"].map((color, i) => (
            <Box
              key={color}
              position={"absolute"}
              w={"40vw"}
              h={"40vh"}
              zIndex={-999}
              top={i === 0 ? 0 : `${i * 5}%`}
              right={`-${i * 5}%`}
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
          <Stack
            justify={"center"}
            minH={"100vh"}
            py={6}
            as={"section"}
            className="header-section"
          >
            <Stack spacing={[2, 4, 6]}>
              <Box className="animate__animated animate__fadeIn">
                <Heading as="h1" size={["2xl", "3xl", "4xl"]}>
                  {homepage.attributes.name}
                </Heading>
              </Box>
              <Box className="animate__animated animate__fadeIn">
                <Heading
                  as={"h2"}
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
            className="about-section"
          >
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce={true}
              delay={300}
            >
              <Stack spacing={0}>
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

                <Stack
                  direction={{
                    base: "column-reverse",
                    md: "row",
                  }}
                  spacing={4}
                  pt={6}
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
                    >
                      <p>
                        Hello! My name is Bayu Wicaksono and I am passionate
                        about{" "}
                        <strong>creating visually appealing designs </strong>
                        that people will appreciate. My love for graphic design
                        began during high school. When I started studying
                        Informatics at Diponegoro University, I realized that I
                        could collaborate design into something valuable in web
                        platforms.
                      </p>
                      <p>
                        Currently, I am fully focused on pursuing my career as a{" "}
                        <strong>frontend developer</strong>. I am constantly
                        learning new techniques and keeping up-to-date with the
                        latest trends in web design to make sure that my work is
                        always <strong>fresh and innovative</strong>. My
                        ultimate goal is to create websites that not only look
                        great but also{" "}
                        <strong>provide an optimal user experience</strong>. I
                        am excited to continue growing as a{" "}
                        <strong>frontend developer </strong>and taking on new
                        challenges in the future.
                      </p>
                    </Flex>
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
                      {homepage.attributes.skills.map((skill) => (
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
              </Stack>
            </AnimationOnScroll>
          </Stack>
          {/* Experiences Section */}
          <Stack
            justify={"center"}
            minH="100vh"
            id="experience"
            py={6}
            as={"section"}
            className="experience-section"
          >
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce={true}
              delay={300}
            >
              <Stack spacing={0}>
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
                              {experience.attributes.title}
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
                              w={"fit-content"}
                              href={experience.attributes.company_url || "#"}
                              size={"sm"}
                            >
                              {experience.attributes.company_name}
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
              </Stack>
            </AnimationOnScroll>
          </Stack>
          {/* Projects Section */}
          <Stack
            justify={"center"}
            minH="100vh"
            id="projects"
            py={6}
            as={"section"}
            className="projects-section"
          >
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce={true}
              delay={300}
            >
              <Stack spacing={0}>
                <HStack spacing={4} maxW={"container.md"}>
                  <Flex shrink={0}>
                    <Heading size={"xl"}>Projects</Heading>
                  </Flex>
                  {/* add horizontal line */}
                  <Box w={"full"} h={"1px"} bg={"orange.300"} my={4} />
                </HStack>

                <Box position={"relative"}>
                  <Stack
                    maxW={"container.lg"}
                    spacing={{
                      base: 6,
                      md: 40,
                    }}
                    pt={6}
                  >
                    {projects.map((project) => (
                      // Create a 2 column grid layout with image on the left and text on the right
                      <Stack
                        // filter={"blur(10px)"}
                        direction={
                          project.id % 2 !== 0
                            ? { base: "column", md: "row" }
                            : { base: "column", md: "row-reverse" }
                        }
                        spacing={4}
                        key={project.id}
                        position={"relative"}
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
                            <Box
                              rounded="md"
                              position={"relative"}
                              overflow={"hidden"}
                            >
                              <Image
                                className="project-image-actual"
                                // zIndex={-999}
                                width={640}
                                height={480}
                                alt={project.attributes.name}
                                src={project.attributes.image}
                              />
                            </Box>
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
                        <Stack
                          spacing={4}
                          alignSelf={"center"}
                          position={{ md: "absolute" }}
                          sx={project.id % 2 === 0 ? { left: 0 } : { right: 0 }}
                          zIndex={999}
                        >
                          <Stack w={"full"} position={"relative"} spacing={4}>
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
                            maxW={"container.sm"}
                            backdropFilter={"blur(2px)"}
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
                </Box>
              </Stack>
            </AnimationOnScroll>
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
            className="contact-section"
          >
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce={true}
              delay={250}
            >
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
                        <Box overflow={"hidden"} shadow={"lg"} rounded={"full"}>
                          <Image
                            src="/jpg/me.jpg"
                            alt="Bayu Wicaksono"
                            width={120}
                            height={120}
                          />
                        </Box>
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
            className="footer-section"
          >
            <Stack direction={"row"} spacing={6} justify={"center"}>
              {homepage.attributes.socials.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  isExternal
                  _hover={{
                    color: "orange.500",
                  }}
                  _focus={{
                    color: "orange.500",
                  }}
                  _active={{
                    color: "orange.500",
                  }}
                  fontSize={"2xl"}
                >
                  <chakra.span className={link.icon} />
                </Link>
              ))}
            </Stack>
            <Stack alignItems={"center"} spacing={2} justify={"center"}>
              <Text fontSize={"sm"}>
                © {new Date().getFullYear()} {homepage.attributes.name}
              </Text>
              <Text fontSize={"sm"}>
                Designed and Developed using Chakra UI
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
    const experiences = [
      {
        id: 1,
        attributes: {
          title: "Frontend Developer",
          company_name: "Maven Digital Asia",
          company_url: "https://maven.co.id/",
          description: `<p>Maven Digital Asia is a digital company that prioritizes delivering measurable outcomes, formed from the merger of two exceptional organizations. During my past experiences, I worked on several front-end projects that involved React development and creating WordPress websites for e-commerce purposes. Some of my significant accomplishments in these projects were:</p><ul class="c16 lst-kix_list_8-0"><li class="c6 li-bullet-0"><span class="c0">Revitalized and expanded a </span><b class="c2">CRUD dashboard </b><span class="c0">for Cleaning Service Product management, elevating user experience and efficiency with </span><b class="c2">React</b><span class="c3 c0">.</span></li><li class="c6 li-bullet-0"><span class="c0">Developed engaging </span><b class="c2">WordPress </b><span class="c3 c0">landing pages and e-commerce websites, ensuring a seamless and visually appealing online presence.</span></li><li class="c6 li-bullet-0"><span class="c0">Engineered a </span><b class="c2">landing page </b><span class="c0">featuring a </span><b class="c2">career portal </b><span class="c0">using </span><b class="c2">React</b><span class="c0">, </span><b class="c2">Tailwind CSS</b><span class="c0">, and the </span><b class="c2">Next.js </b><span class="c3 c0">framework, enhancing recruitment initiatives.</span></li><li class="c6 li-bullet-0"><span class="c0">Constructed an </span><b class="c2">HTML </b><span class="c0">page for streamlined </span><b class="c2">insurance registration</b><span class="c0">, optimizing user interactions through the </span><b class="c2">Tailwind CSS framework</b><span class="c3 c0">.</span></li></ul>`,
          start_date: "2021-03-25",
          end_date: "2021-11-25",
        },
      },
      {
        id: 2,
        attributes: {
          title: "Full Stack Developer",
          company_name: "Insignia ID",
          company_url: "https://insignia.co.id/",
          description: `<p>Insignia offers e-commerce solutions that assist brands and merchants in making data-driven business decisions by utilizing big data analytics and conversational user interfaces.</p><p>I've had the chance to work on a number of websites with a front-end development-heavy approach during my professional time at Insignia. I have successfully finished the following projects:</p><ul class="c16 lst-kix_list_8-0 start"><li class="c6 li-bullet-0"><span class="c0">Spearheaded the development of a web dashboard for a </span><b class="c2">Marketing Automation Tool</b><span class="c0">, incorporating advanced features such as </span><b class="c2">Journey Flow Builder</b><span class="c0">&nbsp;and </span><b class="c2">Advanced Analytics</b><span class="c0">&nbsp;with </span><b class="c2">React</b><span class="c3 c0">.</span></li><li class="c6 li-bullet-0"><span class="c0">Engineered an </span><b class="c2">ETL Tools </b><span class="c0">web dashboard, implementing intuitive </span><b class="c2">drag-and-drop functionality</b><span class="c0">. This innovation streamlined the data processing and migration processes, resulting in notable gains in operational efficiency with </span><b class="c2">React</b><span class="c3 c0">.</span></li><li class="c6 li-bullet-0"><span class="c0">Architected and implemented a high-performance and sustainable </span><b class="c2">dashboard template </b><span class="c0">for the company using </span><b class="c2">React </b><span class="c0">and </span><b class="c2">Chakra UI </b><span class="c3 c0">framework.</span></li><li class="c6 li-bullet-0"><span class="c0">Orchestrated the development of a seamless online travel and tour booking platform using </span><b class="c2">React</b><span class="c0">, </span><b class="c2">Next.JS</b><span class="c0">, </span><b class="c2">Redux</b><span class="c0">, and </span><b class="c2">React Query</b><span class="c3 c0">. This platform revolutionized the user experience for booking flights, trains, hotels, and trips.</span></li><li class="c6 li-bullet-0"><span class="c0">Conceptualized and designed a responsive </span><b class="c2">virtual campaign website</b><span class="c0">&nbsp;using </span><b class="c2">Tailwind CSS</b><span class="c0">, effectively raising awareness for a specific cause or event.</span></li></ul>`,
          start_date: "2021-11-25",
          end_date: null,
        },
      },
      //   {
      //     id: 3,
      //     attributes: {
      //       title: "IT Development Staff",
      //       company_name: "PT. Brantas Abipraya",
      //       company_url: "https://brantas-abipraya.co.id/",
      //       description:
      //         "<p>PT. Brantas Abipraya is an Indonesian state-owned construction company that provides construction services for various types of projects, such as dams, airports, and buildings.</p><ul><li><p>Working on various IT-related stuff such as <strong>dashboard visualization website</strong> in order to visualize internal company results and progress.</p></li><li><p>Doing research to provide <strong>weather forecast applications</strong> for site construction visit planning.</p></li></ul>",
      //       start_date: "2023-04-01",
      //       end_date: null,
      //     },
      //   },
    ];
    const homepage = {
      attributes: {
        name: "Bayu Wicaksono",
        description:
          "A dynamic and eager-to-learn fresh graduate with two years of experience as a full-stack developer and front-end developer. Having three years of experience in Graphics Design in an international non-profit organization during my college years.",
        headline: "Visual Enthusiast 🪄",
        skills: [
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
        ],
        socials: [
          {
            name: "Github",
            href: "https://www.github.com/bwcr",
            icon: "ri-github-line",
          },
          {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/bwcr/",
            icon: "ri-linkedin-box-fill",
          },
          {
            name: "Instagram",
            href: "https://www.instagram.com/bwcr_/",
            icon: "ri-instagram-line",
          },
        ],
      },
    };
    const meta = {
      website: "https://www.bayuwicaksono.com",
      title: `${homepage.attributes.name} - ${homepage.attributes.headline}`,
      description:
        "Bayu Wicaksono is a developer with many experiences such as a full-stack and front-end developer. He is passionate about creating visually appealing designs and keeping up with the latest trends in web design.",
    };
    const projects = [
      {
        id: 1,
        attributes: {
          name: "Personal Website",
          image: `${meta.website}/png/projects/personal-website.png`,
          company: "Personal Project",
          description:
            "Developed a personal website to showcase a portfolio of personal projects and experiences implemented with React and Next.js, the website emphasizes proficiency in web development.",
          url: "https://github.com/bwcr/personal-website",
        },
      },
      {
        id: 2,
        attributes: {
          name: "IoT Recapitulation Data Dashboard",
          image: `${meta.website}/png/projects/iot-dashboard.png`,
          company: "Thesis Project",
          description:
            "Established the first dedicated website for the thesis project to integrate IoT home device monitoring for gardening, door security, and room control. This website has been independently over a period of 6 months utilized with Laravel and the Bootstrap Framework. It was also used the Firebase database for seamless integrations with mobile applications.",
          url: "https://github.com/bwcr/smarthome-dashboard",
        },
      },
    ];

    meta.image = `${meta.website}/png/cover.png`;

    // return props
    return {
      props: {
        experiences: experiences.sort((a, b) =>
          a.attributes.start_date > b.attributes.start_date ? -1 : 1
        ),
        homepage,
        meta,
        projects,
      },
    };
  } catch (err) {
    return {
      props: {
        experiences: [],
        homepage: {},
        meta: {},
        projects: [],
      },
    };
  }
};

export default Home;
