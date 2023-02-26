import {
  Container,
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  VStack,
  Avatar,
  Heading,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

import GlanceItems from "../components/AtAGlanceItems";
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

const IntroCard = () => {
  return (
    <Card m={4} mt={2} bg={useColorModeValue("#ebe7df", "#2e2e2d")}>
      <CardBody>
        <Text>
          hello and welcome to my personal website. this is where i put my
          accomplishments, future works, and random miscellaneous things.
        </Text>
      </CardBody>
    </Card>
  );
};

const AtAGlance = () => {
  return (
    <Container maxWidth="6xl">
      <Heading as="h1" size="lg">
        at a glance:
      </Heading>
    </Container>
  );
};

const Home = () => {
  return (
    <>
      <VStack pt={24} maxWidth="2xl" spacing={8}>
        <Introduction />
        <Divider />
        <IntroCard />
        <AtAGlance />
        <GlanceItems />
      </VStack>
    </>
  );
};

export default Home;
