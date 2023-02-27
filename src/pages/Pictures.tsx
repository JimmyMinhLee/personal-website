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
} from "@chakra-ui/react";
import otherPicture from "../components/images/jimmy2.jpg";
import profilePicture from "../components/images/jimmy.jpg";
import anotherPicture from "../components/images/picture.jpg";

type ImageCardProps = {
  image: string;
  secondImage: string;
  width: string;
  height: string;
};
const ImageCard = (props: ImageCardProps) => {
  const { image, secondImage, width, height } = props;
  return (
    <Flex maxWidth="6xl">
      <Image boxSize={"33vh"} objectFit="cover" src={anotherPicture} />
      <Image boxSize={"33vh"} objectFit="cover" src={anotherPicture} />
      <Image boxSize={"33vh"} objectFit="fill" src={secondImage} />
    </Flex>
  );
};
const Pictures = () => {
  return (
    <Container maxWidth="3xl" pt={24}>
      <Heading
        variant="section-heading"
        bgClip="text"
        bgGradient={useColorModeValue(
          "linear(to-l, #e66465, #9198e5)",
          "linear(to-l, #7928CA, #F88CA7)"
        )}
      >
        my life in pictures:
      </Heading>
      <Divider m={12} />
      <ImageCard
        width="sm"
        height="sm"
        image={otherPicture}
        secondImage={profilePicture}
      />
    </Container>
  );
};
export default Pictures;
