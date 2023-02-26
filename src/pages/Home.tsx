import {
  Box,
  Wrap,
  Card,
  CardBody,
  Spacer,
  Flex,
  Text,
  VStack,
  Avatar,
  WrapItem,
  Heading,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import profilePicture from "../components/images/jimmy.jpg";

const Introduction = () => {
  return (
    <Flex maxWidth="6xl">
      <Avatar
        borderColor={useColorModeValue("black", "white")}
        borderStyle={"solid"}
        size="2xl"
        showBorder={true}
        name="jimmyminhlee"
        src={profilePicture}
      />
      <Box p={4} pl={12}>
        <Heading
          as="h6"
          variant="section-title"
          bgGradient={useColorModeValue(
            "linear(to-l, #000000, #0063d1)",
            "linear(to-l, #F88CA7, #FFFCA7)"
          )}
          bgClip="text"
        >
          who am i?
        </Heading>
        <Text fontSize="xl">jimmy minh lee, software engineer @ doordash</Text>
        <Text fontSize="md">
          perfecting my craft, becoming a master of something
        </Text>
      </Box>
    </Flex>
  );
};

const Currently = () => {
  return (
    <Flex maxWidth="6xl">
      <Box>
        <Heading
          as="h6"
          variant="section-title"
          bgGradient="linear(to-l, #F88CA7, #FFFCA7)"
          bgClip="text"
        >
          what am i currently doing?
        </Heading>
      </Box>
      <Box>
        <Text> This is a box on the side of the original heading. </Text>
      </Box>
    </Flex>
  );
};

const WhatCanIHelpYouWith = () => {
  return (
    <Card m={4} mt={2} bg={useColorModeValue("#a9ad68", "#2a3b59")}>
      <CardBody>
        <Text>
          hello and welcome to my personal website. this is where i put my
          accomplishments, future works, and random miscellaneous things.
        </Text>
      </CardBody>
    </Card>
  );
};
const Home = () => {
  return (
    <>
      <VStack pt={24} maxWidth="2xl" spacing={8}>
        <Introduction />
        <Divider />
        <WhatCanIHelpYouWith />
      </VStack>
    </>
  );
};

export default Home;
