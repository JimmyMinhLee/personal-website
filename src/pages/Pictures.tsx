import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  VStack,
  Box,
  Container,
  Flex,
  useColorModeValue,
  Text,
  Heading,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import otherPicture from "../components/images/jimmy2.jpg";
import profilePicture from "../components/images/jimmy.jpg";
import anotherPicture from "../components/images/picture.jpg";

type ImageCardProps = {
  image: string;
};

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
          documenting my life
        </Heading>
        <Text fontSize="xl"> from garden grove to berkeley</Text>
        <Text display={{ base: "none", lg: "flex" }} fontSize="md">
          back to garden grove
        </Text>
      </Box>
    </Flex>
  );
};

const IntroCard = () => {
  return (
    <Card px={12} bg={useColorModeValue("#ebe7df", "#2e2e2d")}>
      <CardBody>
        <Text>彡໒(⊙ᴗ⊙)७彡 this is my life in pictures </Text>
      </CardBody>
    </Card>
  );
};

const ImageCard = (props: ImageCardProps) => {
  const { image } = props;
  return (
    <>
      <Image
        maxWidth={"33vw"}
        maxHeight={"33vh"}
        boxSize={"33vh"}
        objectFit={"cover"}
        borderRadius={"lg"}
        src={image}
      />
    </>
  );
};

const Images = () => {
  return (
    <VStack pt={8}>
      <Flex maxWidth="6xl">
        <ImageCard image={profilePicture} />
        <ImageCard image={profilePicture} />
        <ImageCard image={otherPicture} />
        <ImageCard image={otherPicture} />
      </Flex>
      <Flex maxWidth="6xl">
        <ImageCard image={profilePicture} />
        <ImageCard image={profilePicture} />
        <ImageCard image={otherPicture} />
        <ImageCard image={otherPicture} />
      </Flex>
      <Flex maxWidth="6xl">
        <ImageCard image={profilePicture} />
        <ImageCard image={profilePicture} />
        <ImageCard image={otherPicture} />
        <ImageCard image={otherPicture} />
      </Flex>
    </VStack>
  );
};

const Pictures = () => {
  return (
    <>
      <VStack maxWidth="3xl" pt={24} spacing={8}>
        <Introduction />
        <IntroCard />
        <Divider />
      </VStack>
      <Images />
    </>
  );
};
export default Pictures;
