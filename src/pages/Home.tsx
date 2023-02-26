import {
  Spacer,
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
  HStack,
} from "@chakra-ui/react";

import GlanceItems from "../components/AtAGlanceItems";
import profilePicture from "../components/images/jimmy.jpg";
import AnimatedSection from "../components/AnimatedSection";

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

const IntroCard = () => {
  return (
    <Card px={12} bg={useColorModeValue("#ebe7df", "#2e2e2d")}>
      <CardBody>
        <Text>°˖✧◝(⁰▿⁰)◜✧˖° welcome to my website!</Text>
      </CardBody>
    </Card>
  );
};

const Home = () => {
  return (
    <>
      <AnimatedSection
        child={
          <VStack pt={24} maxWidth="3xl" spacing={8}>
            <Introduction />
            <IntroCard />
            <Divider />
          </VStack>
        }
        delay={0.2}
      />
      <GlanceItems />
    </>
  );
};

export default Home;
