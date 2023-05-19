import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";

const Skills = ({ skills }) => {
  // add show more button to show all skills
  const { onToggle, isOpen, onOpen, onClose } = useDisclosure();
  const defaultLength = 3;
  const [skillsLength, setSkillsLength] = useState(defaultLength);
  const showMore = () => {
    onOpen();
    setSkillsLength(skills.split(",").length);
  };
  const showLess = () => {
    onClose();
    setSkillsLength(defaultLength);
  };
  return (
    <SimpleGrid as={List} columns={[1, 2, 3]} spacing={2}>
      {skills
        .split(",")
        .slice(0, skillsLength)
        .map((technology) => (
          <ListItem fontSize={"sm"} key={technology}>
            <ListIcon as={ChevronRightIcon} color="brown.500" />
            {technology}
          </ListItem>
        ))}
      <Button
        onClick={showMore}
        w="max-content"
        hidden={isOpen}
        size={"sm"}
        variant={"link"}
      >
        Show More
      </Button>
      <Button
        w="max-content"
        onClick={showLess}
        hidden={!isOpen}
        size={"sm"}
        variant={"link"}
      >
        Show Less
      </Button>
    </SimpleGrid>
  );
};

export default Skills;
